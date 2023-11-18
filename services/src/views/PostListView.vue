<template>
  <h1>Listado de posts</h1>
  <ul class="post-list">
    <li v-for="post in posts" :key="post.id"> 
        <router-link :to="{name: 'PostDetail', params: {id: post.id}}">
            {{ post.title }}
        </router-link>
    </li>
  </ul>
</template>

<script setup>
    import PostService from '@/services/PostService'; // "@" es un alias para la carpeta resources "src"
    import { onMounted } from 'vue';

    const service = new PostService();  //Instancia de un servicio
    const posts = service.getPosts();   //Obtener los posts, hasta aca es una lista vacia aun

    onMounted(async () => {
        await service.fetchAll();       //Obtener todos los datos de la API
    });
</script>

<style scoped lang="scss">
    .post-list {
        width: 95vw;
        height: 75px;
        padding: 20px;
        list-style-type: none;
    }
    .post-list li {
        padding: 10px;
        width: 100%;
        border: 1px solid #ccc;

        a {
            text-decoration: none;
            color: aquamarine;
        }
    }

    li:hover {
        background-color: $primaryColor;
        color: white;
        cursor: pointer;
    }
</style>