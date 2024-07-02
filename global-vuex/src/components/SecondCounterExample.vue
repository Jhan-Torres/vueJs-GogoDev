<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

//store hook
const store = useStore();

const counter = computed(() => store.state.counter)
const times2 = computed(() => store.getters.times2)
const increment = () => store.commit('setCounter', counter.value + 1)
const decrement = () => store.commit('setCounter', counter.value - 1)
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

<style scoped>

</style>