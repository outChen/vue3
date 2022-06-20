<template>
  <div>
    <div>子级</div>
    <div>{{props.info.name}}</div>
    <div>
      <span class="tips">子级要传给父级的数据</span>
    </div>
    <el-button type="primary" @click="handleClick">确定</el-button>
  </div>
 
</template>

<script lang="ts" setup>
import {defineProps, defineEmits,ref,reactive, defineExpose} from 'vue'
interface UserData {
  un:string,
  wife:string
}
// 父传子
const props = defineProps({
  info: {
    type: Object,
    default:() => ({})
  }
})
const sex = ref<string>('男')
const userData = reactive<UserData>({
  un: '长职',
  wife: 'no'
})
// 把子级数据暴露给父级
defineExpose({
  sex,
  userData
})
// 子级触发父级
const emit = defineEmits(['handleChangeValue'])
const handleClick = () => {
  emit('handleChangeValue', '你好')
}
const spanColor = ref('red') // v-bind在style中的用法
console.log('子级', props.info)
</script>
<style scoped>
.tips {
  color:v-bind(spanColor)
}
</style>