<!--
 * @Description: 
 * @version: 
 * @Author: Chengbotao
 * @Date: 2020-08-30 17:33:44
 * @LastEditors: Chengbotao
 * @LastEditTime: 2020-08-30 18:45:11
 * @FilePath: \vue-study\src\activities\detail.vue
-->
<template>
  <div>
    <h1>Token:{{token}}</h1>
    <h2>这里 {{goodID}} 号商品详情</h2>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      goodID: "",
    };
  },
  computed: {
    ...mapGetters(["getToken"]),
    token() {
      return this.getToken;
    },
  },
  watch: {
    $route: {
      handler(to, from) {
        console.log(to, from);
        this.goodID = to.params.id;
        // to , from 分别表示从哪跳转到哪，都是一个对象
        // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>