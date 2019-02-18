import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import Types from './mutation-types'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
    isLogin: false
  },
  mutations: {
    [Types.LOGIN_FLAG] (state) {
      state.isLogin = true
    },
    [Types.EXIT_FLAG] (state) {
      state.isLogin = false
    }
  },
  actions,
  getters
})

export default store
