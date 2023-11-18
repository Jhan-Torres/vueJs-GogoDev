<!-- V-BIIND: Poder asociar datos de una etiqueta que tenemos colocada en nuestro TEMPLATE a nuestro sistema de datos,
    al trabajo que estamos haciendo en el SCRIPT. En otras palabras hacer que nuestras etiquetas que estan en TEMPLATE 
    dependan de la estructura de datos que construimos en el SCRIPT -->
<template>
    <!-- Aplica la clase "danger" si "hasError" es "true" -->
    <p v-bind:class="{'danger': hasError}">V-BIND con clases</p>
    
    <!-- Aplica estilos, se tiene 2 formatos: -->
    <!-- Formato KEBAB CASE, se tiene que indicar campo:valor entre comillas '' -->
    <p v-bind:style="{
        'background-color' : 'blue',
        'color' : 'greenyellow'
    }">V-BIND con estilos KEBAB CASE</p>

    <!-- Formato CAMEL CASE -->
    <p v-bind:style="{
        backgroundColor : 'wheat',
        color: 'black'
    }">V-BIND con estilos CAMEL CASE
    </p>

    <!-- NOTA: Los v-bind se pueden reemplazar con ":" -->
</template>

<script setup>
    let hasError = true;
</script>

<style scoped>
    .danger {
        color: red;
    }
</style>