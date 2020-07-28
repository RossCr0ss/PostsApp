import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/pages/Login.vue'
import Home from '@/pages/Home.vue'
import User from '@/pages/User.vue'
import PostInfo from '@/pages/PostInfo.vue'

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
        component: Home
    },
    /* {
        path: '/user',
        name: 'user',
        component: User
    }, */
    {
        path: '/user/:id',
        props: true,
        name: 'user',
        component: User
    },
    {
        path: '/post',
        name: 'post',
        component: PostInfo
    },

    { 
        path: '*', 
        redirect: '/home' 
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
