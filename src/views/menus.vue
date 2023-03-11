<template>
  <div>
    <h3>menu page</h3>
    <el-button type="primary" @click="handleRequest">获取</el-button>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request'
console.log(import.meta.env)
const handleRequest = () => {
  request({
    method: 'GET',
    url: '/front/ad/getAdList'
    // url: 'front/ad/getAdList',
  }).then((res) => {
    console.log(res)
  })
}
</script>

<style scoped></style>
