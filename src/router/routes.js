
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/MainPage.vue') 
      },
      { 
        path: '/schedule', 
        component: () => import('pages/PageSchedule.vue') 
      },
      { 
        path: '/inbox', 
        component: () => import('pages/PageInbox.vue') 
      },
      { 
        path: '/settings', 
        component: () => import('pages/PageSettings.vue') 
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
