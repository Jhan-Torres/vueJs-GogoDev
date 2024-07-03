<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from './stores/counter';

const counterStore = useCounterStore();

//Extraer un ref de un store
const { defaultValue } = storeToRefs(counterStore)

//Extraer una metodo de un store
const { aMethod } = counterStore
const msg = aMethod();
</script>

<template>
  <div>
    <h1>Hola mundo from PINIA</h1>
    <h2>
      Counter: {{ counterStore.count }}
    </h2>
    <h2>
      By 2: {{ counterStore.doubleCount }}
    </h2>
    <button
      @click="counterStore.increment"
    >
      Add
    </button>
  </div>
  <br>
  <div>
    <h3>default value: {{ defaultValue }}</h3>
    <h3>Method: "{{ msg }}"</h3>
  </div>
</template>

<style scoped>

</style>
