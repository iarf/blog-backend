import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/admin/login',
        name: 'Sign in',
        component: () => import('./views/admin/Login.vue')
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import('./views/admin/Main.vue')
    }
];

const router = new VueRouter({ routes });

export default router;