<template>
  <router-view/>
  <!-- <div>
    欢迎
  </div> -->
</template>
<script lang="ts" setup>

  // add(5,6)
  // add(3)
  // function add (x:number, y?: number):string {
  //   if(y) return (x + y).toString()
  //   return x.toString()
  // }
  // function add (x:number, y = 0):string {
  //    return (x + y).toString()
  // }



  // 字符串

  getadd<string|number>('hahha') // 返回值是字符类型，可以传入字符数字两种类型
  getadd<number>(1)
  function getadd<T>(firstName:T):Array<T> {
    return [firstName]
  }
</script>