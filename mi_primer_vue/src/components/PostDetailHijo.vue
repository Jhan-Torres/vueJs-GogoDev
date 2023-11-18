<template>
  <div class="post"> 
    <h3>{{ props.title }}</h3>
    <p>{{ props.content }}</p>
    <input type="text" v-model="msg">
    <!-- <button @click="$emit('sayHi')">Say Hola!</button> USANDO EL METODO INLCUIDO EN VUE (VER DOCUMENTACION)-->
    <button @click="buttonClick()">Saludar</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    title: {
      type: String,
      required: true 
    },
    content: {
      type: String,
      required: false,
      default: "Este post no tiene contenido"
    }
    //con esto jalamos las propiedades y con el objeto interno agregamos algunas verificaciones
  })

  //Para hacer la comunicacion ascendente, los emits tambien pueden ser objetos
  const emit = defineEmits(["sayHi"]);//Los emits que esta recibiendo del padre y van en un ARRAY
  let msg = ref("");

  function buttonClick() {
    emit("sayHi", msg.value);//despues de la coma van los parametros de la funcion
  }
  
</script>

<style scoped>
.post {
    width: 300px;
    border-radius: 10px;
    height: 100px;
    background-color: rgb(51, 134, 107);
    margin: 10px;
    padding: 10px;
}
</style>