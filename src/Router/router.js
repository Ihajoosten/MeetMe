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
      path: '/user',
      component: () => import('../components/account/AccountView'),
      children: [
        {
          path: '/user/account',
          name: 'account',
          component: () => import('../pages/account/ProfilePage')
        },
        {
          path: '/user/register',
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
          path: '/user/change-password',
          name: 'change-password',
          component: () => import('../pages/account/ForgotPassword')
        },
      ]
    },
    {
      path: '*',
      name: 'not-found',
      component: () => import('../pages/other/NotFound')
    },
    {
      path: '/meeting',
      component: () => import('../components/meeting/MeetingView'),
      children: [
        {
          path: '/meeting/new',
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
          path: '/meeting/:id',
          name: 'meeting-detail',
          component: () => import('../pages/meeting/MeetingDetail')
        },
        {
          path: '/meeting/:id/edit',
          name: 'meeting-update',
          component: () => import('../components/meeting/UpdateMeeting'),
          props: true,
          beforeEnter: (to, from, next) => {
            if (auth.isLoggedIn()) {
              next();
            } else {
              next('/not-authorized');
            }
          }
        },
        {
          path: '/meeting/search?location=:location',
          name: 'find',
          component: () => import('../pages/meeting/FindMeeting')
        },
        {
          path: '/meeting/search?category=:category',
          name: 'find-category-meetings',
          component: () => import('../pages/meeting/FindMeeting'),
          props: true
        }
      ]
    }
  ],
  linkActiveClass: 'active',
  mode: 'history'
});

export default router;
