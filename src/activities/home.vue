<!--
 * @Description: 
 * @version: 
 * @Author: Chengbotao
 * @Date: 2020-08-30 17:06:46
 * @LastEditors: Chengbotao
 * @LastEditTime: 2020-08-30 18:56:13
 * @FilePath: \vue-study\src\activities\home.vue
-->
<template>
  <div>
    <h1>home</h1>
    <h2>Token:{{token}}</h2>
    <el-button @click="btnSetToken">设置 Token</el-button>
    <el-button @click="resetState">还原 State</el-button>
    <el-button @click="gotoAbout">查看详情</el-button>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getToken"]),
    token() {
      return this.getToken;
    },
  },
  methods: {
    ...mapActions(["setToken"]),
    ...mapMutations(["resetStates"]),
    gotoAbout() {
      this.$router.push({ path: "about" });
    },
    btnSetToken() {
      this.setToken("chengbt");
    },
    resetState() {
      this.resetStates();
    },
  },
};
</script>