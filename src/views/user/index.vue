<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick"
            >Detail</el-button
          >
          <el-button link type="primary" @click="handleEdit" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
    <edit-user-dialog :info="info" @handleChangeValue="handleChangeValue" ref="editUserRef"/> 
  </div>
</template>
<script lang="ts" setup>
import EditUserDialog from './children/EditUserDialog.vue'
import { reactive, ref } from 'vue'
interface Info {
  name: string,
  age: number
}
console.log('腹肌')
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
const info = reactive<Info>({
  name: 'chen',
  age: 25
})
const handleClick = <T>(value:T):T => {
  console.log('click')
  return value
}
const handleChangeValue = (val:string) => {
  info.name = val
  console.log('handleChangeValue', val)
}
const editUserRef = ref()
const handleEdit = () => {
  console.log('获取子级数据', editUserRef.value.userData)
}

console.log("ref", editUserRef)

</script>