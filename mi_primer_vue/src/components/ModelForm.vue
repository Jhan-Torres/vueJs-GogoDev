<!-- Cuando trabajamos con formularios necesitaremos un bindeo bidireccional entre la info que tenemos en 
    nuestros datos (script) y la vista que tenemos en el template. Por ejemplo tenemos un input de texto en nuestro formulario
    y queremos manipular la informacion que se escribe en ese input, vamos a necesitar gestionar una comunicacion bidireccional
    debido a que necesitaremos que todo lo que escriba el usuario en ese input automaticamente se vea reflejado en los datos que 
    estamos trabajando en el componente.  
-->
<template>
    <form>
        <input type="text" v-model="inputText"/>
        <input type="checkbox" v-model="agree"/>Acepto los terminos y condiciones
        <select v-model="country">
            <option value="Spain">Spain</option>
            <option value="UK">UK</option>
            <option value="France">France</option>
            <!-- Si las "option" no tienen la propiedad "value", toma el valor de referencia al valor de la etiqueta -->
        </select>
        <!-- con v-model indicamos que el valor de nuestro input esta vinculado con la variable en nuestro script -->
    </form>
</template>

<script setup>
    import { ref } from 'vue';
    let inputText = ref('');
    let agree = ref('true');    //Si esta en true, el checkbox estará marcado por defecto
    let country = ref('Spain'); //Por defecto, el select estará marcado en "Spain" por la inicializacion que ponemos aca
</script>

<style scoped>

</style>