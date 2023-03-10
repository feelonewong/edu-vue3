<template>
  <div class="common-layout">
    <el-container>
      <AppSider></AppSider>
      <el-container>
        <el-header class="header">
          <AppHeader></AppHeader>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import AppSider from './AppSider.vue'
import AppHeader from './AppHeader.vue'
</script>


<style scoped lang="scss">
.header {
  background-color: #ccc;
}
</style>