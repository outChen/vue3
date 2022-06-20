<template>
  <div>
    <h1>hooks写法</h1>
    <p> 算法：<span>{{count}}</span> </p>
    <el-button type="primary" @click="decrease">减法</el-button>
    <el-button type="primary" @click="add">加法</el-button>
  </div>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
import  mathMethod  from './hooks'
const {count, add, decrease} = mathMethod()
console.log('count', count, mathMethod)
</script>