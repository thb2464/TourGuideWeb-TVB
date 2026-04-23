'use strict';

const { errors } = require('@strapi/utils');

module.exports = async (policyContext, config, { strapi }) => {
  const authHeader = policyContext.request.header.authorization;
  if (!authHeader) throw new errors.UnauthorizedError('Missing authorization');

  const parts = authHeader.split(/\s+/);
  if (parts[0].toLowerCase() !== 'bearer' || parts.length !== 2) {
    throw new errors.UnauthorizedError('Malformed authorization header');
  }
  const token = parts[1];

  const manager = strapi.sessionManager;
  if (!manager) throw new errors.UnauthorizedError('Session manager unavailable');

  let result;
  try {
    result = manager('admin').validateAccessToken(token);
  } catch (err) {
    throw new errors.UnauthorizedError('Token validation error');
  }
  if (!result.isValid) throw new errors.UnauthorizedError('Invalid or expired token');

  const isActive = await manager('admin').isSessionActive(result.payload.sessionId);
  if (!isActive) throw new errors.UnauthorizedError('Session no longer active');

  const rawUserId = result.payload.userId;
  const numericUserId = Number(rawUserId);
  const userId =
    Number.isFinite(numericUserId) && String(numericUserId) === rawUserId
      ? numericUserId
      : rawUserId;

  const user = await strapi.db
    .query('admin::user')
    .findOne({ where: { id: userId } });

  if (!user) throw new errors.UnauthorizedError('Admin user not found');
  if (user.blocked || user.isActive !== true) return false;

  return true;
};
