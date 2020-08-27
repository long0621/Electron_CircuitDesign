import Vue from 'vue'
import Vuex from 'vuex'
// 注入分離模組
import { state } from './enter/state';
import {mutations} from './enter/mutations';
import {actions} from './enter/actions'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  // modules: {
  // }
})
