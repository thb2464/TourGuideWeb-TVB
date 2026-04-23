'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/chatbot/reindex',
      handler: 'reindex.trigger',
      config: {
        auth: false,
        policies: ['global::is-admin-panel'],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/chatbot/reindex/status',
      handler: 'reindex.status',
      config: {
        auth: false,
        policies: ['global::is-admin-panel'],
        middlewares: [],
      },
    },
  ],
};
