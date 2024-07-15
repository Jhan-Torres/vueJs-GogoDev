import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  //data
  const token = ref(null)

  //methods
  const setToken = (value) => {
    token.value = value
  }

  return {
    token,
    setToken,
  }
})

