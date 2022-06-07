import { defineStore } from 'pinia'
import { login } from '@/api/data.services'
import { UserInfo } from '@/utils/constant'

export const userStore = defineStore('user',{
  state: () => {
    return {
      userInfo: {}
    }
  },
  getters:{},
  actions: {
    handleLogin(params:UserInfo) {
      login(params).then((res) => {
        console.log('res', res)
        this.userInfo = res.data
      }) 
    }
  }
})