<template>
<h3>{{ counter }}</h3>
<button @click="addCounter">ADD</button>
</template>

<script setup> //(*)
/* Se tiene una funcion de SETUP, que se va a encargar de realizar las acciones, como los datos y metodos. El formato de 
trabajo va a estar mas orientado al uso de HOOKS para engancharnos a los diferentes momentos del ciclo de vida del componente
FORMA MAS LARGA:*/
/* 
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'CounterComposition',
    setup() {
        let counter = ref(0);
        const addCounter = () => {
            counter.value++;
        }
        return {counter, addCounter}
    }
 }) 
 */

//FORMA MAS CORTA:
/* Cuando colocamos la propiedad "setup"(*) en la etiqueta script, ya no es necesario usar el "defineComponent", 
ni el nombre(name), debido a que se usará el nombre del propio componente(CounterComposition) y tampoco es necesario
especificar que estamos escirbiendo el "setup" ni retornar los valores. */
import { ref } from 'vue';
let counter = ref(0) //Reactividad
const addCounter = () => {
    counter.value++; //Nota: Aca no usamos el "this", puesto que todo esta dentro del setup
}

/* NOTA: cuando trabajamos con COMPOSITION API vamos a tener un mayor control de los elementos, es decir, debemos indicar que 
elementos queremos que sean reactivos */ 
</script>