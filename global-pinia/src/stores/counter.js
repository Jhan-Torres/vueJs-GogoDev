import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

/*
Another way to export an store:
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
