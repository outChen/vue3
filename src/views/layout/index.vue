<template>
  <div class="main-contaniner">
    <main-menu></main-menu>
    <div class="right-box-container">
      <main-breadcrumb></main-breadcrumb>
      <main-content></main-content>
    </div>
  </div>
</template>
<script lang="ts" setup>
import MainMenu from './children/MainMenu.vue'
import MainBreadcrumb from './children/MainBreadcrumb.vue'
import MainContent from './children/MainContent.vue'
</script>
<style lang="less" scoped>
// @import '@/assets/css/main.css';
.main-contaniner {
  // height: 100%;
  
   .menu-container {
    position: fixed;
    width: 200px;
    height: 100%;
    background-color: #113263;
  }
  .right-box-container {
    margin-left: 200px;
  }
  .breadcrumb-container {
    
  }
}
</style>