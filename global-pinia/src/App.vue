<script setup>
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useCounterStore } from './stores/counter';

//vue-use imports
import { useMouseInElement } from '@vueuse/core'

//Nodes ref
const cardTarget = ref(null) 

//get variables from vue-use
const { 
  elementX, 
  elementY, 
  isOutside, 
  elementHeight, 
  elementWidth 
} = useMouseInElement(cardTarget); 

const cardTransformation = computed(() => {
  const MAX_ROTATION = 6
  const rotationX = (MAX_ROTATION/2 - (elementY.value/elementHeight.value)*MAX_ROTATION).toFixed(2);

  const rotationY = ((elementX.value/elementWidth.value)*MAX_ROTATION - MAX_ROTATION/2).toFixed(2);

  return isOutside.value 
    ? ''
    : `perspective(${elementWidth.value}px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
})

const counterStore = useCounterStore();

//Extraer un ref de un store
const { defaultValue } = storeToRefs(counterStore)

//Extraer una metodo de un store
const { aMethod } = counterStore
const msg = aMethod();
</script>

<template>
  <div class="card">
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
.card {
  border: 1px solid bisque;
  padding: 2rem;
  border-radius: 25px;
  background-color: #002022;  
  transform: v-bind(cardTransformation);
  transition: transform 0.25s ease-out;
}
</style>
