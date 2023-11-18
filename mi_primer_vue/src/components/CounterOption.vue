<template>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">ADD</button> <!-- El formato mas sencillo para realizar una accion en VUE es el "@" -->

</template>

<script>
    //Trabajando con OPTION API
    // defineComponent, permite definir los componentes
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'CounterOption',
        components: {}, //Ya que no usaremos ningun componente como el ejercicio de los POST'S
        data() {        //esta funcion retorna un objeto con todas las variables
            let counter = 0;
            return {counter} 
        },
        methods: {      //Metodos que va a utilizar el componente
            addCounter() {
                this.counter++; //Cuando trabajamos en OPTION API, debemos usar el "this" para los datos
            } 
        }
    });
    //Una vez que tenemos todo listo con OPTION API, los elementos (datos, metodos) son accesibles por el TEMPLATE
    //NOTA: Con OPTION API, todos los elementos que incluimos en el data() son reactivos 
</script>

<style scoped>
</style>