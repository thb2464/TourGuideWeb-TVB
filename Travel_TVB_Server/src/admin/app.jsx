import { Database, ChartPie } from '@strapi/icons';

const config = {
  locales: [],
};

const bootstrap = (app) => {
  app.addMenuLink({
    to: '/dashboard-tvb',
    icon: ChartPie,
    intlLabel: {
      id: 'dashboard-tvb.menu.label',
      defaultMessage: 'Dashboard',
    },
    Component: () => import('./pages/Dashboard'),
    permissions: [],
  });

  app.addMenuLink({
    to: '/chatbot-sync',
    icon: Database,
    intlLabel: {
      id: 'chatbot-sync.menu.label',
      defaultMessage: 'Chatbot Sync',
    },
    Component: () => import('./pages/ChatbotSync'),
    permissions: [],
  });
};

export default {
  config,
  bootstrap,
};
