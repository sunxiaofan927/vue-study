<!--
 * @Description: 
 * @version: 
 * @Author: Chengbotao
 * @Date: 2020-08-30 17:09:25
 * @LastEditors: Chengbotao
 * @LastEditTime: 2020-08-30 18:40:53
 * @FilePath: \vue-study\src\activities\about.vue
-->
<template>
  <div>
    <h1>About</h1>
    <h2>Token:{{token}}</h2>
    <ul>
      <el-button
        v-for="(item,index) in commodity"
        :key="index"
        @click="gotoDetail(index+1)"
      >{{item}}</el-button>
    </ul>
    <el-button @click="gotoHome">回到主页</el-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      commodity: ["一号商品详情", "二号商品详情", "三号商品详情"],
    };
  },
  computed: {
    ...mapGetters(["getToken"]),
    token() {
      return this.getToken;
    },
  },
  methods: {
    gotoHome() {
      this.$router.push({ path: "/" });
    },
    gotoDetail(id) {
      this.$router.push({ path: `/detail/${id}` });
    },
  },
};
</script>

