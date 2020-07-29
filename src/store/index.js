import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        USERS:[],
        logUser: {
            status: false
        },
        logUserInfo:{
            id: null
        }
    },
    mutations: {
        SET_USERS_TO_STATE(state, users){
            return state.USERS = users
        },
        SET_USER_LOGIN_STATUS(state, payload){
            return state.logUser.status = payload
        },
        SET_USER_INFO(state, payload){
            return state.logUserInfo.id = payload
        }
    },
    actions: {
        GET_USERS({commit}) {
            return axios('https://jsonplaceholder.typicode.com/users', {
                method: 'GET'
            })
            .then((users)=>{
                commit('SET_USERS_TO_STATE', users.data)
                return users
            })
        },
        CHANGE_LOGIN_STATUS({commit}, payload){
            commit('SET_USER_LOGIN_STATUS', payload)
        },
        CHANGE_USER_INFO({commit}, payload){
            commit('SET_USER_INFO', payload)
        }
    },
    getters: {
        USERS(state) {
            return state.users
        },
        LOG_USER(state) {
            return state.logUser.status
        },
        GET_USER_BY_ID(state) {
            return state.logUserInfo.id
        }
    }
})
