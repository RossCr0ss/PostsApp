import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import Home from "../views/Home";
import PostInfo from "../views/PostInfo";
import User from "../views/User";
import UserInfo from "../views/UserInfo";
Vue.use(VueRouter);

const routes = [{
        path: '/postsapp',
        name: 'home',
        component: Home
    },
    {
        path: '/postsapp/post/:id',
        name: 'post',
        component: PostInfo,
        props: true
    },
    {
        path: '/postsapp/user/:id',
        name: 'user',
        component: User,
        props: true
    },
    {
        path: '/postsapp/userinfo/:id',
        name: 'userinfo',
        component: UserInfo,
        props: true
    },
    {
        path: '/',
        redirect: {
            name: 'login'
        },
    },
    {
        path: '*',
        redirect: {
            name: 'login'
        },
    },
    {
        path: '/postsapp/login',
        name: 'login',
        component: Login
    }

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router