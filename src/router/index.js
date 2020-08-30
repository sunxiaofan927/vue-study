/*
 * @Description: 
 * @version: 
 * @Author: Chengbotao
 * @Date: 2020-08-30 17:02:26
 * @LastEditors: Chengbotao
 * @LastEditTime: 2020-08-30 18:24:13
 * @FilePath: \vue-study\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../activities/home"
import About from "../activities/about"
import Detail from "../activities/detail"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },           
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: Detail
    }
  ]
})

export default router;