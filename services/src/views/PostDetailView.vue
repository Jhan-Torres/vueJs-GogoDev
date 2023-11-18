<template>
  <div class="post-container">
    <div class="post-card">
      <h1>{{ post.id }}</h1>
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
    <router-link :to="{name: 'PostList'}" class="link">Back</router-link>
  </div>
</template>

<script setup>
  import PostService from '../services/PostService';
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'; //Retorna la ruta actual de la pagina

  const service = new PostService;
  const post = service.getPost();

  onMounted(async () => {
    const route = useRoute();   //guardamos la ruta actual
    let elm = route.params.id;  //guardamos el parametro id de la ruta
    await service.fetchById(elm);
  })
</script>

<style scoped lang="scss">
  .post-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .post-card {
    padding: 25px;
    width: 70%;
    border: 2px solid #ccc;
    border-radius: 15px;
    color: aqua;
  }

  .link:hover {
    text-decoration: underline;
    cursor: pointer;
  }
</style>