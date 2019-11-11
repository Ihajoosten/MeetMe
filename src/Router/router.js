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
            path: "/find",
            name: "find",
            component: () => import("@/pages/FindMeeting.vue")
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