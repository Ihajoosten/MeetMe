import Vue from "vue";
import Router from "vue-router";

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
            component: () => import("@/pages/About.vue")
        },
        {
            path: "/login",
            name: "login",
            component: () => import("@/pages/Login.vue")
        },
        {
            path: "/register",
            name: "register",
            component: () => import("@/pages/Register.vue")
        },
        {
            path: "/change-password",
            name: "change-password",
            component: () => import("@/pages/ForgotPassword.vue")
        },
        {
            path: "/find",
            name: "find",
            component: () => import("@/pages/FindMeeting.vue")
        },
        {
            path: "*",
            name: "not-found",
            component: () => import("@/pages/NotFound.vue")
        },
        {
            path: "/meetings/:id",
            name: "meeting-detail",
            component: () => import("@/pages/MeetingDetail.vue")
        }
    ],
    mode: 'history'
});

export default router;