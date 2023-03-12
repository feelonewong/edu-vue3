import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'

export const useToken = defineStore('token', () => {
  const tokenJson = ref('')
  const token = computed(() => {
    try {
      return JSON.parse(tokenJson.value || localStorage.getItem('tokenInfo') || '{}')
    } catch (error) {
      ElMessage.error('JSON字符串格式有误！')
      localStorage.setItem('tokenInfo', '')
      throw error
    }
  })
  function saveToken(token: string) {
    tokenJson.value = token
    localStorage.setItem('tokenInfo', token)
  }
  return { token, saveToken }
})
