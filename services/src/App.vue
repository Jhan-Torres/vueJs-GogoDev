<template>
  <RouterView/> <!-- RouterView es el componente que renderiza la vista(view) al que esta asociada al URL actual -->
</template>

<script setup>
import { RouterView } from 'vue-router'

</script>

<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: $primaryColor;
  margin-top: 60px;
  display: flex;
}
</style>