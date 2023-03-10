<template>
  <el-aside width="200px">
    <el-scrollbar>
      <el-menu unique-opened :collapse="isCollapse" router>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><i-ep-setting /></el-icon>
            <span>权限管理</span>
          </template>
          <el-menu-item index="/menus">
            <el-icon><i-ep-setting /></el-icon>
            <span>菜单列表</span>
          </el-menu-item>
          <el-menu-item index="/resources">
            <el-icon><i-ep-setting /></el-icon>
            <span>资源列表</span>
          </el-menu-item>
          <el-menu-item index="roles">
            <el-icon><i-ep-setting /></el-icon>
            <span>角色列表</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/users">
          <template #title>
            <el-icon><i-ep-setting /></el-icon>
            <span>用户管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/course">
          <template #title>
            <el-icon><i-ep-setting /></el-icon>
            <span>课程管理</span>
          </template>
        </el-menu-item>
        <el-sub-menu index="/advertisement">
          <template #title>
            <el-icon><i-ep-setting /></el-icon>
            <span>广告管理</span>
          </template>
          <el-menu-item index="/advertisement">
            <el-icon><i-ep-setting /></el-icon>
            <span>广告位管理</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {isCollapse} from "@/utils/data"
</script>

<style lang="scss" scoped>
.el-aside {
  width: 60px;
  background-color: #eee;
  height: 100vh;
  width: auto;
}
.el-menu {
  width: 200px;
  background-color: #eee;
  border-right: none;
  &.el-menu--collapse {
    width: 60px;
    & h1 {
      display: none;
    }
  }
}
</style>
