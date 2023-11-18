<template>
    <h1 v-if="age < 18 ">Eres menor de edad</h1>
    <h1 v-else>Eres mayor de edad</h1>

    <h1 v-show="age < 18 ">Eres menor de edad</h1>
    <h1 v-show="age >= 18">Eres mayor de edad</h1>

    <!-- 
        Con ambos (v-if, v-show) obtenemos el mismo resultado, pero difieren en la forma interna en la que VUE esta utilizando 
        para mostrarnos o no un componente, además de el rendimiento:
        * En el caso de V-IF -> Lo que hacemos es introducir y eliminar el nodo en el VIRTUAL DOM. Lo usamos cuando necesitemos
        realizar acciones que el "v-if" o el "v-else" no va a cambiar demasiado.
        * En el caso de V-SHOW -> Lo que se hace es que internamente se esta aplicando una clase CSS que lo que hace es que 
        haga un "display:none", es decir que no se muestre, pero esta dentro del DOM. Lo usamos cuando tenemos un elemento que 
        va a ser comprobado muchas veces o tiene tiempo en muestra.   
    -->
</template>

<script setup>
    let age = 14;
</script>

<style scoped>

</style>