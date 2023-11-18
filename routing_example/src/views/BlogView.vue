<template>
  <h1>Blog Section</h1>

  <ul>
    <!-- en el (:to="{}") especificamos el nombre de la ruta, mas no la ruta en si y los parametros que necesita -->
    <li><RouterLink :to="{name: 'post', params: {id: 1}}">1er Post</RouterLink></li> 
    <li><RouterLink :to="{name: 'post', params: {id: 2}}">2do Post</RouterLink></li>
    <li><RouterLink :to="{name: 'post', params: {id: 3}}">3er Post</RouterLink></li>
    <li><RouterLink :to="{name: 'post', params: {id: 4}}">4to Post</RouterLink></li>
  </ul>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>
