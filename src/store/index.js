/*
 * @Description: 
 * @version: 
 * @Author: Chengbotao
 * @Date: 2020-08-30 18:28:38
 * @LastEditors: Chengbotao
 * @LastEditTime: 2020-08-30 18:58:29
 * @FilePath: \vue-study\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";
import VuexPersistedStates from "vuex-persisted-states";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: "sunxf"
  },
  getters: {
    getToken(state) {
      return state.token
    }
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    resetStates(state, prams) { }
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    }
  },
  plugins: [VuexPersistedStates({
    paths: []
  })]
})

export default store;