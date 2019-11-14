import Vue from "vue";
import Router from "vue-router";
import * as auth from "../services/authService";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/pages/About.vue"),
      beforeEnter: (to, from, next) => {
        if (auth.isLoggedIn()) {
          next();
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/Login.vue"),
      beforeEnter: (to, from, next) => {
        if (!auth.isLoggedIn()) {
          next();
        } else {
          next("/");
        }
      }
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/pages/Register.vue"),
      beforeEnter: (to, from, next) => {
        if (!auth.isLoggedIn()) {
          next();
        } else {
          next("/");
        }
      }
    },
    {
      path: "/change-password",
      name: "change-password",
      component: () => import("@/pages/ForgotPassword.vue")
    },
    {
      path: "/find",
      name: "find",
      component: () => import("@/pages/FindMeeting.vue"),
      beforeEnter: (to, from, next) => {
        if (auth.isLoggedIn()) {
          next();
        } else {
          next("/login");
        }
      }
    },
    {
      path: "*",
      name: "not-found",
      component: () => import("@/pages/NotFound.vue")
    },
    {
      path: "/meetings/:id",
      name: "meeting-detail",
      component: () => import("@/pages/MeetingDetail.vue"),
      beforeEnter: (to, from, next) => {
        if (auth.isLoggedIn()) {
          next();
        } else {
          next("/login");
        }
      }
    }
  ],
  linkActiveClass: "active",
  mode: "history"
});

export default router;
