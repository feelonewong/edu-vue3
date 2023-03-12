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
        <el-avatar :src="userInfo.portrait" />
        <el-icon class="el-icon--right">
          <i-ep-arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>{{ userInfo.userName }}</el-dropdown-item>
          <el-dropdown-item divided @click="handleLogOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { isCollapse } from '@/utils/data'
import { getUserInfo, logout } from '@/api/user'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useToken } from '@/stores/accsssToken'

const router = useRouter()
const useTokenRes = useToken()

const handleIsCollapse = () => {
  isCollapse.value = !isCollapse.value
}
const userInfo = ref({
  userName: '',
  portrait: ''
})
onMounted(() => {
  getUserInfo()
    .then(({ data }) => {
      let { success, content, message } = data
      if (success) {
        // portrait userName
        userInfo.value = content
      } else {
        ElMessage.error(message)
      }
    })
    .catch((err) => {
      console.log(err)
    })
})
const handleLogOut = () => {
  ElMessageBox.confirm('确定要退出吗?', '退出', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      logout().then(() => {
        ElMessage({
          type: 'success',
          message: '退出！'
        })
        router.push('/login')
        useTokenRes.saveToken('')
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '退出失败'
      })
    })
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
