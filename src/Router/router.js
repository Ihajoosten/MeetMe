import Vue from 'vue';
import Router from 'vue-router';
import * as auth from '../services/authService';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/other/Home')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/other/About'),
      beforeEnter: (to, from, next) => {
        if (auth.isLoggedIn()) {
          next();
        } else {
          next('/not-authorized');
        }
      }
    },
    {
      path: '/not-authorized',
      name: 'not-authorized',
      component: () => import('../components/shared/NotLoggedInModal')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/account/Login'),
      beforeEnter: (to, from, next) => {
        if (!auth.isLoggedIn()) {
          next();
        } else {
          next('/');
        }
      }
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../pages/account/ProfilePage')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/account/Register'),
      beforeEnter: (to, from, next) => {
        if (!auth.isLoggedIn()) {
          next();
        } else {
          next('/');
        }
      }
    },
    {
      path: '/change-password',
      name: 'change-password',
      component: () => import('../pages/account/ForgotPassword')
    },
    {
      path: '/find',
      name: 'find',
      component: () => import('../pages/meeting/FindMeeting')
      // beforeEnter: (to, from, next) => {
      //   if (auth.isLoggedIn()) {
      //     next();
      //   } else {
      //     next('/not-authorized');
      //   }
      // }
    },
    {
      path: '*',
      name: 'not-found',
      component: () => import('../pages/other/NotFound')
    },
    {
      path: '/meetings/new',
      name: 'meeting-create',
      component: () => import('../pages/meeting/CreateMeeting'),
      beforeEnter: (to, from, next) => {
        if (auth.isLoggedIn()) {
          next();
        } else {
          next('/not-authorized');
        }
      }
    },
    {
      path: '/meetings/:id',
      name: 'meeting-detail',
      component: () => import('../pages/meeting/MeetingDetail')
      // beforeEnter: (to, from, next) => {
      //   if (auth.isLoggedIn()) {
      //     next();
      //   } else {
      //     next('/not-authorized');
      //   }
      // }
    }
  ],
  linkActiveClass: 'active',
  mode: 'history'
});

export default router;
