<template>
  <div class="form-wrapper">
    <el-form :rules="rules" ref="formRef" :model="form" label-width="120px" label-position="top">
      <h3>登录</h3>
      <el-form-item label="手机号" class="phone-number" prop="phone">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button class="submit-btn" type="primary" :loading="isLoading" @click="handleSubmit(formRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { type FormRules, type FormInstance, ElMessage } from 'element-plus'
import { reactive, ref } from 'vue'
import { login } from '@/api/user'
const form = reactive({
  phone: '18201288771',
  password: '111111'
})
const rules = reactive<FormRules>({
  phone: [
    { required: true, message: '电话号码不能为空', trigger: 'blur' },
    { pattern: /^1\d{10}$/, message: '手机号必须是11位数字', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 18, message: '密码长度不正确' }
  ]
})
const formRef = ref<FormInstance>()
const isLoading = ref(false)
const handleSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl
    .validate((valid, fields) => {
      if (valid) {
        isLoading.value = true
        // 调用接口
        login(form)
          .then((res) => {
            isLoading.value = false
            const result = res.data
            if (!result.success) {
              ElMessage.error(result.message)              
              return
            } else {
              // 成功存token，跳转首页
              let token = JSON.parse(result.content) 
              console.log(token)
              localStorage.setItem('token', token.access_token)
              localStorage.setItem('refreshToken', token.refresh_token)
              ElMessage.success(result.message)
            }
          })
          .catch((err) => {
            isLoading.value = false
            console.log(err)
          })
      } else {
        console.log('error submit!', fields)
      }
    })
    .catch((err) => {
      ElMessage.error('表单验证失败！')
      throw err
    })
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
    .el-form-item.phone-number {
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
