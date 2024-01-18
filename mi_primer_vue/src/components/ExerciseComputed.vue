<template>
  <div>
    <label for="subtotal" v-custom-size:xxl>
      Subtotal:
      <input type="number" id="subtotal" v-model="subtotal">
    </label>
    <h3 v-custom-font.xxl.blue>Total impuestos a pagar {{ totalVat }} ({{ vat }}%)</h3>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const vat = 21; //descuento
let subtotal = ref(0);
const totalVat = computed(() => (vat * subtotal.value) / 100);
/*
100 --> subtotal 
21 --> x
x = (21 * subtotal)/100
*/
</script>

<style scoped></style>