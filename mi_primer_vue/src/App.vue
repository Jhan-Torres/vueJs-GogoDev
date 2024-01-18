<!-- Componente principal de la aplicacion -->
<!-- Cada componente se construye con UpperCamelCase y extension .vue -->
<!-- Son trozos de codigo independientes que contienen las vistas y los modelos -->


<!-- La etiqueta SCRIPT contiene la logica de funcionamiento y los datos de nuestros componentes -->
<script setup>

import PostContainer from './components/PostContainer.vue';

import CounterOption from './components/CounterOption.vue';
import CounterComposition from './components/CounterComposition.vue';
import ExampleSelective from './components/ExampleSelective.vue';
import ExampleFor from './components/ExampleFor.vue';
import ClassBind from './components/ClassBind.vue';
import ClassVOn from './components/ClassV-on.vue';
import ModelForm from './components/ModelForm.vue';

//Ciclo de vida de un componente
import CycleOption from './components/CycleOption.vue';

//Uso de props y emits
import PostListPadre from './components/PostListPadre.vue';

//Datos computados
import ComputedExample from './components/ComputedExample.vue';
import ExerciseComputed from './components/ExerciseComputed.vue';

const name = 'Vue dinamico';
const colorAzul = 'color: blue';
const arrayColores = ['Blue', 'Red', 'Green'];
const activo = false;
const encendido = true;

const arrayFrutas = ["pear", "apple", "strawberry"];

const arrayObjetos = [
  {
    name: "Manzana",
    price: "$1.00",
    description: "Una manzana",
    stock: 0
  },
  {
    name: "Pera",
    price: "$2.00",
    description: "Una pera",
    stock: 10
  },
  {
    name: "Naranja",
    price: "$3.00",
    description: "Una naranja",
    stock: 20
  }
];

//METHODS
const handleClick = (boton) => {
  console.log(`Click... en ${boton}`);
}

//REACTIVIDAD CON REF  -- EJERCICIO DE CONTADOR
import { ref, computed } from 'vue';

//Creamos una varibale reactiva
const counter = ref(0) //ref() --> dentro de los partentesis irá el valor inicial que le queremos proporcionar

const increment = () => {
  //mutamos el valor a traves de .value
  counter.value++; //Si trabajamos dentro de SCRIPT, debemos acceder al valor de la variable con .value
}

const reduce = () => counter.value--;

const revalue = () => (counter.value = 0);

/*Las propiedades computadas (COMPUTED) nos sirven para generar calculos en nuestros componentes, por ejemplo no se recomienda colocar  
demasiada lógica en nuestras plantillas HTML, ya que dificulta la interpretación de nuestros componentes */

//Por eso, para la lógica compleja que incluye datos reactivos, se recomienda utilizar una propiedad calculada:

const classCounter = computed(() => {
  if (counter.value == 0) {
    return 'zero';
  }
  return counter.value > 0 ? 'positive' : 'negative'
})

/* En lugar de una propiedad calculada, podemos definir la misma función como un método. Para el resultado final, los dos enfoques son 
exactamente iguales. Sin embargo, la diferencia es que las propiedades calculadas se almacenan en caché en función de sus 
dependencias reactivas. */

/* Una propiedad calculada solo se volverá a evaluar cuando algunas de sus dependencias reactivas hayan cambiado. */

//REACTIVIDAD CON REF  -- EJERCICIO DE CONTADOR

//PRACTICA CONTADOR CON ARRAY

const arrayCounter = ref([]);

const addNumber = () => {
  arrayCounter.value.push(counter.value);
}

const buttonFavDisabled = computed(() => {
  for (const number of arrayCounter.value) {
    if (number === counter.value) {
      return 'false';
    }
  }
})

const deleteNumber = () => {
  arrayCounter.value = arrayCounter.value.filter(number => number != counter.value);
}

//PRACTICA CONTADOR CON ARRAY

</script>

<!-- etiqueta template: renderiza todo el html que tenemos en este archivo -->
<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <!-- {{  }} Para traer el valor de la variable en las etiquetas SCRIPT y tambien permite expresiones de JS -->
  <h2>Colores {{ arrayColores }}</h2> <!-- Devuelve el contenido del Array pero en texto -->

  <!-- v-bind: (abreviado con ":") PERMITE USAR VARIABLES EN LOS ATRIBUTOS DE LAS ETIQUETAS -->
  <h2 :style="colorAzul"> AZUL </h2> <!-- PARA traer una variable de CSS de las etiquetas SCRIPT -->

  <h2 :style="`color: ${arrayColores[2]}`">ArrayColores</h2>

  <h2>
    {{ activo ? 'Toy activao' : 'No toy activao' }} <!-- Tambien podemos usar el operador ternario -->
  </h2>

  <!-- v-if  v-else-if  v-else -->
  <h2 v-if="encendido">TOY ENCENDIDO</h2> <!-- v-if, v-else-if, v-else   TIENEN QUE ESTAR SEGUIDOS, SINO NO FUNCIONA-->
  <h2 v-else>NO TOY ENCENDIDO</h2>

  <!-- v-show    PARA MOSTRAR O NO EL ELEMENTO -->
  <h3 v-show="true">mostrar v-show</h3>
  <!-- se mustra el elemento, sino se despliega style="display:none;" como atributo del elemento -->

  <!-- v-for    para iterar sobre una lista de elementos -->
  <ul>
    <li v-for="(valor, index) in arrayFrutas" :key="index"> <!-- Para darle a Vue una pista para que pueda rastrear la identidad de cada
                                                            nodo y, por lo tanto, reutilizar y reordenar los elementos existentes, se 
                                                            debe proporcionar un atributo KEY único para cada elemento, en este caso el 
                                                            index es un buen valor para pasarle-->
      {{ valor }} en posición {{ index }}
    </li>
  </ul>

  <ul>
    <!-- Para recorrer el array con v-for -->
    <li v-for="(objeto, index) in arrayObjetos" :key="objeto.name">
      <h4>Fruta N° {{ index + 1 }}</h4>

      <!-- Para recorrer el objeto con v-for -->
      <ul>
        <li v-for="(value, property, index) in objeto" :key="objeto.name">
          <!-- para recorrer objetos, es diferente a recorrer arrays, aqui el
                                                                    1er parametro es el valor de la propiedad(value), el 2do elemento
                                                                    es el nombre de la propiedad(property) y el 3er elemento es el index-->
          {{ property }}: {{ value }} - posición: {{ index }}
        </li>
      </ul>
    </li>
  </ul>

  <!-- Mezclando v-if con v-for -->
  <!-- WARNING: EL V-IF TIENE MAYOR PESO QUE EL V-FOR, por lo que si se declaran en la misma linea, habrá problemas -->
  <!-- Problema: imprimir en una lista las frutas con stock mayor a 0 -->
  <ul>
    <template v-for="objeto in arrayObjetos" :key="objeto.name"> <!-- hacemos el v-for en un TEMPLATE, es decir, lo estamos realizando 
                                                                  sobre algo que es como transparente y lo que esta en su interior
                                                                  del v-for va a ser lo que se va a recorrer -->
      <li v-if="objeto.stock > 0">
        {{ objeto }}
      </li>
    </template>
  </ul>

  <!-- v-on (abrevidado con "@")  PARA ESCUCHAR EVENTOS DOM Y EJECUTAR JS CUANDO SE ACTIVAN-->
  <button v-on:click="handleClick">
    <!-- Cuando no hay parametros, podemos obviar los parentesis de la funcion (handleClick) -->
    Activar 1
  </button>

  <button @click="handleClick('boton 2')"> <!-- Cuando haya parametros, los podemos pasar como normalmente se hace -->
    Activar 2
  </button>

  <!-- VARIABLES CON ref() -->
  <!-- ref es una forma de trabajar con la reactividad de Vue 3. -->
  <!-- ref toma el argumento y lo devuelve envuelto dentro de un objeto con una value propiedad, que luego puede usarse para 
  acceder o mutar el valor de la variable reactiva. -->
  <!-- DOM: Cuando muta el estado reactivo, el DOM se actualiza automaticamente. -->
  <!-- En el template no es necesario acceder al .value, ya que el valor de la variable reactiva se puede acceder directamente. -->

  <!-- EJERCICIO CONTADOR -->
  <hr>

  <div class="container text-center">
    <h2 :class="classCounter"> <!-- :class   PARA USAR CLASES DINAMICAS -->
      {{ counter }}
    </h2>
    <button @click="increment" class="btn btn-success m-1">+1</button>
    <button @click="reduce" class="btn btn-danger m-1">-1</button>
    <button @click="revalue" class="btn btn-secondary m-1">Reiniciar</button>
    <button @click="deleteNumber" class="btn btn-warning m-1">Eliminar</button>
    <!-- EJERCICIO CONTADOR -->

    <!-- PRACTICA CONTADOR CON ARRAY -->
    <button @click="addNumber" :disabled="buttonFavDisabled" class="btn btn-primary m-1">Fav</button>
    <h3>FAVS -> {{ arrayCounter }} </h3>
    <!-- PRACTICA CONTADOR CON ARRAY -->
  </div>

  <hr>

  <!-- CRONOLOGIA GOGODEV: -->

  <!-- POST-CONTAINER -->
  <PostContainer />


  <!-- FORMATOS PARA TRABAJO EN VUE: OPTION API (version 1 y 2) vs COMPOSITION API (version 3) -->
  <!-- OPTION API: Constituye un objeto que describe el contenido de una forma sencilla de entender -->
  <!-- COMPOSTION API: Funciona de una forma mas enfoca a HOOKS y da mayor control -->
  <!-- CONTADOR CON OPTION API: -->
  <CounterOption />

  <!-- CONTADOR CON COMPOSITION API: -->
  <CounterComposition />


  <!-- DIRECTIVAS -->
  <!-- 
    Las directivas funcionan como atributos especiales, precedidos de forma automatica por la nomenclatura "v-" y que nos van
    a permitir hacer acciones dentro del VIRTUAL DOM. El objetivo de una directiva es actuar sobre el VIRTUAL DOM, modificar 
    ese renderizado en el VIRTUAL DOM y aplicarle propiedades, acciones dinamicas que permiten controlar el comportamiento, 
    aspecto, etc. 
   -->
  <!-- DIRECTIVAS SELECTIVAS (RENDERIZADO CONDICIONAL) -->
  <ExampleSelective />


  <!-- BUCLE for -->
  <ExampleFor />


  <!-- V-BIND -->
  <ClassBind />


  <!-- V-ON -->
  <ClassVOn />


  <!-- BINDEO BIDIRECCIONAL -->
  <ModelForm />


  <!-- CICLO DE VIDA DE UN COMPONENTE CON OPTION API -->
  <CycleOption />


  <!-- USO DE PROPS Y EMITS -->
  <PostListPadre />


  <!-- DATOS COMPUTADOS -->
  <ComputedExample />
  <ExerciseComputed />

  <hr>

  <!-- DIRECTIVAS PERSONALIZADAS -->
  <!-- 
    Podemos crear una directiva para un conjunto grande de componentes, aunque tambien se puede hacer dentro de un componente
    individual. (ir al archivo: main.js)
  -->
</template>


<!-- 
  Etiqueta STYLE contiene todos los estilos que vayamos a usar en nuestro proyecto.
  CSS escrito afecta a todo el contenido de la app, pero lo habitual es que solo afecte al componente que estamos utilizando. 
  Por lo que en este archivo app.vue, colocamos los estilos generales.
  Para que afecten solo al componente actual tenemos que poner la propiedad escope "scoped": <style scoped></style> 
-->
<style>
h1 {
  color: azure;
}

/*   <!-- EJERCICIO CONTADOR --> */
.positive {
  color: greenyellow;
}

.negative {
  color: rgb(218, 62, 62);
}

.zero {
  color: rgb(69, 69, 212);
}

/*   <!-- EJERCICIO CONTADOR --> */
</style>

<!-- 
PARA COMPILAR NUESTRO SITIO WEB:
  1. Abrir una terminal y ejecutar el comando "npm ruin build" -> para compilar la aplicacion y crear 
  una carpeta llamaada "DIST". Esa carpeta tiene el sitio web, tiene su index, css y demás archivos 
  de JS que hemos creado. Esta carpeta fue hecha por VITE, para que el navegador lo pueda entender.

  NOTA: La carpeta "DIST" es la única que se sube a un servidor para visualizar el sitio web.

  2. Para comprobar que la carpeta "DIST" se haya creado correctamente, tenemos el comando "npm run 
  preview". Este comando levanta otro servidor pero exclusivamente de la carpeta "DIST" (no es un 
  servidor de desarrollo como el "npm run dev").

  NOTA: este comando solo se usa para ver que la compilacion se haya hecho bien.

  3. Con los comandos ejecutados, solo esperamos que se cree la carpeta "DIST" y fin.

  NOTA: si tenemos una actualizacion de nuestra aplicacion, tenemos que hacer los pasos anteriores 
  nuevamente. Por lo que si VUE crea una nueva carpeta "DIST" y lo reemplaza con la anterior versión. 
-->