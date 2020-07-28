import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: [],
        posts: [],
        logUser: [
            {
               /*  'name': 'Edik' */
            }
        ]
    },
    mutations: {
        SET_USERS_TO_STATE(state, users) {
            state.users = users
        },
        SET_POSTS_TO_STATE(state, posts) {
            state.posts = posts
        },
        SET_USER_IS_LOGGED(state, user) {
            state.logUser = user
        }
    },
    actions: {
        GET_LOG_USER({state}) {
            /* const id = state.logUser.id */
            return axios (`https://jsonplaceholder.typicode.com/users/${state.logUser.id}`, {
                method: 'GET'
            })
        },
        GET_USERS_FROM_API({commit}) {
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
        GET_POSTS_FROM_API({commit}) {
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
        USERS(state) {
            return state.users;
        },
        POSTS(state) {
            return state.posts
        },
        logUser(state) {
            return state.logUser
        }
    }
})
