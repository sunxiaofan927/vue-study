<!--
 * @Description: 
 * @version: 
 * @Author: Chengbotao
 * @Date: 2020-03-01 20:19:07
 * @LastEditors: Chengbotao
 * @LastEditTime: 2020-05-21 23:24:10
--> 
<template>
  <div>
    <button @click="isHas">点击</button>
    <custom-input v-if="flag" :key="1" type="text" @focus.once="isFocus"></custom-input>
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
    isHas(){
      this.flag = !this.flag
    },
    isFocus(){
      console.log(2223)
    }
  }
}
</script>

<style>
h1{
  background: red
}
</style>