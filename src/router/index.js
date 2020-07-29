import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import User from "@/pages/User";
import UserInfo from "@/pages/UserInfo";
/* import PostInfo from "@/pages/PostInfo"; */
Vue.use(VueRouter);

    const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/user/:id',
        name: 'user',
        component: User,
        props: true
    },
    {
        path: '/userinfo/:id',
        name: 'userinfo',
        component: UserInfo,
        props: true
    },
    {
        path: '*',
        redirect: {
            name: 'login'
        },
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
    /* {
      path: '/postsapp/post/:id',
      name: 'post',
      component: PostDetail,
      props: true
    }, */
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
