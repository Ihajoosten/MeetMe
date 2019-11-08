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
            path: "/meetings/:id",
            name: "meeting-detail",
            component: () => import("@/pages/MeetingDetail.vue")
        }
    ],
    mode: 'history'
});

export default router;