import Vue from 'vue';
import VueRouter from 'vue-router';
import { apolloClient } from './apollo-client';
import gql from 'graphql-tag';

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

router.beforeEach(async (to,from,next) => {
    if (to.matched.some(record => record.meta.requiresAuth)){
        if (localStorage.getItem('apollo-token') == null){
            next({name: 'Login'});
        }else {
            const isAuthenticated = await apolloClient.mutate({
                mutation: gql`mutation{
                    checkAuth
                }`
            });
            if(isAuthenticated.data.checkAuth){
                //user is authenticated
                next();
            }else {
                console.log(isAuthenticated)
                next({name:'Login'});
            }
        }
    }
    else next();
})

export default router;