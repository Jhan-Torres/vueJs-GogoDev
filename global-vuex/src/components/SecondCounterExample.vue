<script setup>
import { computed, useSlots } from 'vue';
import { useStore } from 'vuex';

//si el componente tiene mas de un slot, con useSlots() obtendrás un array "VNodes" usando los nombres como Key
const slots = useSlots();

//store hook
const store = useStore();

const counter = computed(() => store.state.counter)
const times2 = computed(() => store.getters.times2)
const increment = () => store.commit('setCounter', counter.value + 1)
const decrement = () => store.commit('setCounter', counter.value - 1)

const hasTitle = computed(() => !!slots.title)
</script>

<template>
  <div
    v-if="hasTitle"
  >
    <slot 
      name="title"
    />
  </div>

  <h3>
    Counter: {{ counter }}
  </h3>

  <h3>
    Counter x2 = {{ times2 }}
  </h3>

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