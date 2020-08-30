<!--
 * @Description: 
 * @version: 
 * @Author: Chengbotao
 * @Date: 2020-03-01 20:19:07
 * @LastEditors: Chengbotao
 * @LastEditTime: 2020-08-30 18:16:23
--> 
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import CustomInput from './cutomInput'
export default {
  name: "App",
  components: {
    CustomInput
  },
  data(){
    return {
      flag: true
    }
  },
  methods: {
  }
}
</script>

<style>
h1{
  background: red
}
</style>