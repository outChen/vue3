<template>
  <el-button @click="handleLogin">登录</el-button>
</template>
<script lang="ts" setup>
import { ElButton } from 'element-plus'
import { userStore } from '@/store/user'
import { UserInfo } from '@/utils/constant'
import { useRouter } from "vue-router"
  const store = userStore()
    const router = useRouter()
  const handleLogin= () => {
    const params: UserInfo = {admin:'123'}
    store.handleLogin(params)
    console.log('dayin', router)
    router.push({path:'/user'})
  }
</script>