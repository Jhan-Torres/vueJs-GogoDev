<script setup>
import { ref } from 'vue';
import FirstCounterExample from './components/FirstCounterExample.vue';
import SecondCounterExample from './components/SecondCounterExample.vue'

const colorPicked = ref('#181818'); //default color value
</script>

<template>
  <section 
    class="bg__applied"
  >
    <FirstCounterExample>
      <h2>First vuex counter example</h2>
    </FirstCounterExample>
    <br>
    <br>
    <hr>
    <br>
    <SecondCounterExample>
      <template #title>
        <h2>
          Second vuex counter example
        </h2>
      </template>
      <template #anotherTitle>
        <h2>
          Another title
        </h2>
      </template>
    </SecondCounterExample>
  </section>

  <input
    class="bg__applied"
    type="color"
    v-model="colorPicked"
  />
</template>

<style scoped>
.bg__applied {
  background-color: v-bind(colorPicked);
}
</style>
