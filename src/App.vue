<template>
  <div class="wrapper">你好高浮雕高浮雕韩国</div>
  <RouterView />
</template>
<script lang="ts">
import { defineComponent,reactive,ref } from 'vue'
import { login } from '@/api/data'
// import service from "@/service/http"
export default defineComponent({
  setup() {
    const count = ref(0)
    const state = reactive({
      name: 'chen',
      age:'18'
    })
    const handleLogin = () => {
      login().then((res) => {
        console.log('res',res)
      })
    }
    
    return {
      count,
      state,
      handleLogin
    }
  },
})
</script>

<style></style>
