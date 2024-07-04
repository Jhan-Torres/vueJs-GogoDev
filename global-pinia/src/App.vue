<script setup>
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useCounterStore } from './stores/counter';

//vue-use imports
import { useMouseInElement } from '@vueuse/core'
import { onClickOutside } from '@vueuse/core';

//Nodes ref
const cardTarget = ref(null)
const modalTarget = ref(null) 

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
  const rotationX = ((MAX_ROTATION/2) - ((elementY.value/elementHeight.value)*MAX_ROTATION)).toFixed(2);

  const rotationY = (((elementX.value/elementWidth.value)*MAX_ROTATION) - (MAX_ROTATION/2)).toFixed(2);

  return isOutside.value 
    ? `perspective(${elementWidth.value}px) rotateX(0deg) rotateY(0deg)`
    : `perspective(${elementWidth.value}px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
})

const counterStore = useCounterStore();

//Extraer un ref de un store
const { defaultValue } = storeToRefs(counterStore)

//Extraer una metodo de un store
const { aMethod } = counterStore
const msg = aMethod();

//modal
const isModalOpen = ref(false)

onClickOutside(modalTarget, () => (isModalOpen.value = false))
</script>

<template>
  <div 
    class="card"
    ref="cardTarget"
  >
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
  <br>
  <h2>
    Display modal!
  </h2>
  <button 
    @click="isModalOpen = true"
  >
    Open modal
  </button>
  <Teleport to="#modal">
    <Transition name="modal">
      <!-- "name" property above is to replace v-... clase names (see styles scoped below) -->
      <!-- transition goes here, whenever "isModalOpen" changes, transition gonna display -->
      <div
        class="modal-bg"
        v-if="isModalOpen"
      >
        <div 
          class="modal"
          ref="modalTarget"
        >
          <p>Click outside this modal to close it</p>
          <button
            @click="isModalOpen = false"
            class="close-btn"
          >
            X
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.card {
  border: 1px solid bisque;
  padding: 2rem;
  border-radius: 25px;
  background-color: #002022;  
  transform: v-bind(cardTransformation);
  transition: transform 0.25s ease-out;
}

.modal-bg {
  /* Modal to the viewport */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  /* Darken the screen */
  background-color: rgba(0, 0, 0, 0.5);

  /* Center the modal itself */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  /* needed the position button */
  position: relative;

  /* aesthetic purposes */
  background: white;
  padding: 50px 100px;
  border-radius: 5px;
  box-shadow: 0px 10px 5px 2px rgba(0, 0, 0, 0.1);
  color: black;
}

.modal .close-btn {
  /* put button in the top right */
  position: absolute;
  top: 10px;
  right: 10px;

  /* remove default styles */
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.modal .close-btn:hover {
  transform: scale(110%);
  transition: 150ms;
  color: red;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
