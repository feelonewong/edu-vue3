<template>
  <el-icon size="small" color="red">
    <i-ep-setting />
  </el-icon>
  <el-button @click="open" type="primary" style="margin: 20px">click</el-button>
</template>

<script lang="ts" setup>
const open = () => {
  ElMessage('this is a message.')
}
const handleClick = () => {
  console.log('123')
}
</script>

<style scoped>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>
