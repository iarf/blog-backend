import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/admin',
        name: 'Admin Panel',
        component: () => import('./views/admin.vue')
    }
];

const router = new VueRouter({ routes });

export default router;