  <!--
  Datos que queremos que sean reactivos, tambien queremos que se escuchen sus cambios para hacer sus modificaciones, pero
  son valores que tienen dependencia a otros valores. Supongamos que tenemos un valor reactivo (cadena1), este es una referencia
  de primer orden, una referencia reactiva (ref); sin embargo podemos tener otro dato distinto (cadena2), que dependa de la 
  cadena1, este valor que depende de otro valor decimos que es un valor COMPUTADO, dado que vamos a necesitar realizar 
  ciertos calculos u operaciones para llegar a su valor final. 
  Practicamente lo que decimos a VUE es que estamos especificando un valor COMPUTADO, pero este valor quiero que sea reactivo;
  sin embargo no tienes que escucharle a él, porque el nunca va a cambiar, tienes que escuchar a los valores de los cuales depende, 
  y cuando estos valores de los cuales depende cambien aprovecha y cambia tambien el valor COMPUTADO.  
  -->
<template>
  <div>
    <input type="text" placeholder="text..." v-model="message">
    <h3>{{ message }}</h3>
    <h3>{{ reverse }}</h3>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

let message = ref("");

//valor computado:
const reverse = computed(() => message.value.split("").reverse().join(""));
</script>

<style scoped></style>