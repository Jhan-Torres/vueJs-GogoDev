<template>
    <ul>
        <li v-for="country in countries" v-bind:key="index">{{ country }}</li>
    </ul>
    <!-- 
        Nota: para recorrer una lista o una estructura, por definición, se necesita un identificador único paraa cada uno de
        los nodos, sino VUE no va a poder recorrerlo efectivamente. Esto se realiza con "v-bind:key="
        Nota: Podemos abreviar el "v-bind" con ":" 
    -->
    <ul>
        <li v-for="fruit in fruits" :key="fruit.code">{{ fruit.name }}</li>
    </ul>
</template>

<script setup>
    import {ref} from 'vue';
    let countries = ref([
        'Perú', 'Spain', 'France', 'UK', 'Italy'
    ]);

    let fruits = ref([
        {
            code: 'ap',
            name: 'apple'
        },
        {
            code: 'or',
            name: 'orange'
        },
        {
            code: 'strw',
            name: 'strawberry'
        }
    ])
</script>

<style scoped>
</style>