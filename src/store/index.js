import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        posts: [],
        users: [],
        userLogging: {
            isLogging: false
        },
        logUser: {
            userId: null
        }
    },
    mutations: {
        SET_USERS_TO_STATE(state, users) {
            return state.users = users
        },
        UPDATE_USER_LOGGING(state, payload) {
            return state.userLogging.isLogging = payload
        },
        UPDATE_USER_INFO(state, payload) {
            return state.logUser.userId = payload
        },
        SET_POSTS_TO_STATE(state, posts) {
            return state.posts = posts
        }
    },
    actions: {
        GET_USERS({commit}) {
            return axios('https://jsonplaceholder.typicode.com/users', {
                method: 'GET'
            })
            .then((users) => {
                commit('SET_USERS_TO_STATE', users.data)
                return users
            })
            .catch((error) => {
                console.log(error)
                return error
            })
        },
        CHANGE_LOGED({commit}, payload) {
            commit('UPDATE_USER_LOGGING', payload)
        },
        SET_USER_INFO({commit}, payload) {
            commit('UPDATE_USER_INFO', payload)
        },
        GET_POSTS({commit}) {
            return axios('https://jsonplaceholder.typicode.com/posts', {
                method: 'GET'
            })
            .then((posts) => {
                commit('SET_POSTS_TO_STATE', posts.data)
                return posts
            })
            .catch((error) => {
                console.log(error)
                return error
            })
        },
    },
    getters: {
        ALL_USERS(state) {
            return state.users
        },
        IS_USER_LOGGING(state) {
            return state.userLogging.isLogging
        },
        GET_USER_INFO(state) {
            return state.logUser.userId
        },
        ALL_POSTS(state) {
            return state.posts
        }
    }
})