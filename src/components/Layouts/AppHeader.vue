<template>
  <div class="header-wraper">
    <el-icon v-show="isCollapse" @click="handleIsCollapse"><i-ep-fold /></el-icon>
    <el-icon v-show="!isCollapse" @click="handleIsCollapse"><i-ep-expand /></el-icon>
    <el-breadcrumb separator="/" class="bread-crumb">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown class="arrow">
      <span class="el-dropdown-link">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <el-icon class="el-icon--right">
          <i-ep-arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item divided>退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {isCollapse} from "@/utils/data"
const handleIsCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<style scoped lang="scss">
.header-wraper {
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
}
.bread-crumb {
  margin-left: 10px;
}
.arrow {
  margin-left: auto;
}
.el-dropdown-link {
  display: flex;
  align-items: center;
}
</style>
