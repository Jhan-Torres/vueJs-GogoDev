import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//Setup stores syntax
export const useCounterStore = defineStore('counter', () => {
  const defaultValue = ref('default')
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const aMethod = () => {
    return 'i am a method'
  }

  return { 
    count, 
    doubleCount, 
    increment,
    defaultValue,
    aMethod
  }
})

/*
Option Stores syntax
export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 1
    }
  },

  getters: {
    times2: (state) => state.count * 2
  },

  actions: {
    increment(value = 1) {
      this.count += value;
    } 
  }
})
*/
