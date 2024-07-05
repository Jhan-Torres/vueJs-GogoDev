<script setup>
import { ref } from 'vue';

let note = ref('')

const sendToServer = async () => {
  alert("works!")
  const rawResponse = await fetch('http://', {
    method: 'POST', 
    //metodo post ya que este envio solicita informacion y normalmente es POST
    headers: { 
    //Aqui es donde definimos que tipo de info estamos enviando
      'Content-type': 'application/json',  
      //Tipo de contenido para que el servidor interprete los datos correctamente en JSON
      'Accept': 'applocation/json', 
      //(opcional) para indicar el forzado para que acepte el formato application/json
      'Authorization': 'Bearer YYYYYYYYYYYYYYYYYY', 
      //(Bearer --> tipo de token) enviamos el JWT para que el servidor sepa que somos usuarios autenticados
    },
    body: JSON.stringify({
      note: note.value,
    })
  })

  const res = await rawResponse.json()
  console.log(res);
}
</script>

<template>
  <div>
    <input 
      type="text"
      v-model="note" 
    />
    <button
      @click="sendToServer"
    >
      Enviar nota al servidor
    </button>
  </div>
</template>

<style scoped>

</style>