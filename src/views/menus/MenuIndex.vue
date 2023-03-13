<template>
  <div>
    <h3>菜单列表</h3>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAll } from '@/api/menus'
import { onMounted } from 'vue'
import type { MenusItem } from '@/api/menus'
const tableData = ref([] as MenusItem[])
onMounted(() => {
  getAll().then((res) => {
    console.log(res)
  })
})
</script>

<style scoped></style>
