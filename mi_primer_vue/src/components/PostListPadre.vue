<template>
    <div class="container">
        <!-- Las props se usan en las etiquetas y podemos darle el nombre que queramos, en este caso :title y :content -->
        <PostDetailHijo v-for="(element, index) in info" :key="index" 
            :title="element.title" :content="element.content"
            @sayHi="showAlert"/> <!-- la funcion con "()" mostrará undefined -->
        <!-- estamos haciendo "COMUNICACION VERTICAL DESCENDENTE", usamos "props" y pasamos la info que queramos al hijo -->

        <!-- En la comunicacion "ASCENDENTE" usamos "emits", es decir, eventos: "@" (v-on) con el nombre que queramos -->
    </div>
</template>

<script setup>
    import PostDetailHijo from './PostDetailHijo.vue';

    let info = [
        { 
            title: "Post 1",
            content: "Texto ejemplo 1" 
        }, 
        {
            title: "Post 2",
            content: "Texto ejemplo 2" 
        }, 
        {
            title: "Post 3",
            content: "Texto ejemplo 3" 
        }, 
        {
            title: "Post 4",
            content: "Texto ejemplo 4" 
        }, 
        {
            title: "Post 5",
            content: "Texto ejemplo 5" 
        }
    ];

    //"COMUNICACION VERTICAL ASCENDENTE": se hace de hijo a padre y el hijo tiene que emitir un evento que escuchará el padre
    function showAlert(msg) {
        alert(msg);
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
    }
</style>