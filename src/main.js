// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import { timeago } from '@/utils/timeFormat'
import { api } from '@/utils/api'

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

/* 粒子背景插件 */
import VueParticles from 'vue-particles'

Vue.use(VueParticles)

Vue.use(VueQuillEditor)

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.timeago = timeago
Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
