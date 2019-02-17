import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)
const state = {
  loginFlag: true
}

export default {
  state,
  actions,
  mutations
}
