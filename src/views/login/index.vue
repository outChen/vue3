<template>
  <el-button @click="handleLogin">登录</el-button>
</template>
<script lang="ts" setup>
import { login } from '@/api/data.services'

  function handleLogin() {
    login().then((res) => {
      console.log('res', res)
    })
  }
</script>