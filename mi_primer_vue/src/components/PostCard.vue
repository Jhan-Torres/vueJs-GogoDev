<template>
    <div class="post-card">
        <h3>Titulo</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, iusto optio. Nemo omnis maxime nostrum at, 
            a pariatur dicta suscipit fuga repellat debitis rem autem possimus vitae cum corrupti! Blanditiis?
        </p>

        <!-- Una vez importado un componente en "SCRIPT", lo podemos usar como una etiqueta aquí: -->
        <PostButton/>
    </div>
</template>

<script setup>
// Importar componente, dado que cada PostCard tendrá un button.
    import PostButton from './PostButton.vue';
</script>

<style scoped>
    .post-card {
        border-radius: 15px;
        padding: 10px;
        margin: 5px;
        border: 1px solid #ccc;
    }
</style>