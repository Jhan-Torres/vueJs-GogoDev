<script setup>
import store from '@/store';
import { computed } from 'vue';

const counter = computed(() => {
  //leer el counter desde el "store"
  return store.state.counter
})

const times2 = computed(() => {
  //leer el getter "times2" desde el "store"
  return store.getters.times2
})

const increment = () => {
  //usar mutation "setCounter" desde el store
  //para hacer una mutacion, lo hacemos a través de "commit"
  store.commit('setCounter', counter.value + 1)
}

const decrement = () => {
  store.commit('setCounter', counter.value - 1)
}
</script>

<template>
  <h2>
    Counter: {{ counter }}
  </h2>

  <h2>
    Counter x2 = {{ times2 }}
  </h2>

  <button 
    @click="increment"
  >
    Add
  </button>

  <button 
    @click="decrement"
  >
    Reduce
  </button>
</template>
