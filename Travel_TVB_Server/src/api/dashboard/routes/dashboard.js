'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/dashboard/overview',
      handler: 'dashboard.overview',
      config: {
        auth: false,
        policies: ['global::is-admin-panel'],
        middlewares: [],
      },
    },
  ],
};
