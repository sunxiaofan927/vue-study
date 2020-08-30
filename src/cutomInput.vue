<!--
 * @Description: 
 * @version: 
 * @Author: Chengbotao
 * @Date: 2020-05-21 21:28:31
 * @LastEditors: Chengbotao
 * @LastEditTime: 2020-05-21 22:48:08
--> 
<template>
  <input type="text" @focus="handleFocus">
</template>

<script>
export default {
  methods: {
    handleFocus(){
      this.$emit('focus')
    }
  },
  beforeDestroy(){
    this.$off()
  }
}
</script>

<style>

</style>