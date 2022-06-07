import { defineStore } from 'pinia'

export const userStore = defineStore('user',{
    state: () => {
      return {
        userInfo: {}
      }
    },
    getters:{},
    actions: {
      
    }
})