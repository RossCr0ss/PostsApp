import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/pages/Login.vue'

Vue.use(VueRouter)
    const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/pages/Home.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('@/pages/User.vue')
    },
    {
        path: '/post',
        name: 'post',
        component: () => import('@/pages/PostInfo.vue')
    },

    { 
        path: '*', 
        redirect: '/' 
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
