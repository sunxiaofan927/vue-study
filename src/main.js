/*
 * @Description: 
 * @version: 
 * @Author: Chengbotao
 * @Date: 2020-08-30 16:45:03
 * @LastEditors: Chengbotao
 * @LastEditTime: 2020-08-30 18:51:52
 * @FilePath: \vue-study\src\main.js
 */
import Vue from "vue";
import App from "./App";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router"
import store from "./store"

Vue.use(ElementUI)



new Vue({
  el: "#app",
  components: {
    App
  },
  router,
  store,
  template: "<App />"
})