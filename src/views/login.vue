<template>
  <div class="form-wrapper">
    <el-form :model="form" label-width="120px" label-position="top">
      <h3>登录</h3>
      <el-form-item label="手机号" class="phone-number">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button class="submit-btn" type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const form = reactive({
  phone: '',
  password: ''
})
const onSubmit = () => {
  ElMessage('this is a message.')
}
</script>

<style scoped lang="scss">
.form-wrapper {
  height: 100vh;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  .el-form {
    padding: 20px;
    width: 300px;
    background-color: #fff;
    border-radius: 10px;
    .el-form-item.phone-number{
      margin-top: 20px;
    }
  }
}
.submit-btn {
  width: 100%;
}
h3 {
  text-align: center;
}
</style>
