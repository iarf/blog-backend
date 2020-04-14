import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('./views/admin/Login.vue')
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import('./views/admin/Main.vue'),
        meta: { requiresAuth: true }
    }
];

const router = new VueRouter({ routes });

router.beforeEach((to,from,next) => {
    if (to.matched.some(record => record.meta.requiresAuth)){
        if (localStorage.getItem('apollo-token') == null){
            next({name: 'Login'});
        }else next();
    }
    else next();
})

export default router;