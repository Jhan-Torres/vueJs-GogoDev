<template>
    <h1>Post view #{{ postId }}</h1>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';  
    //Para recuperar los datos, tenemos un HOOK al router de vue, asi podemos acceder a la informacion de la RUTA

    let postId = ref('');

    onMounted(() => {
        const route = useRoute();
        postId.value = route.params.id; //Para acceder al ID del post
    })
</script>