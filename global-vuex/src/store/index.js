import { createStore } from "vuex";

export default createStore({
  state: { 
    //todos los datos que va a tener el store

  },
  getters: { 
    //métodos para obtener la información de un "state", además de otros valores
    //que se pueden modificar en el flujo (parecido a los "computed")

  },
  mutations: { 
    //métodos equivalentes a los setter, para modificar los "states", 
    //solo permiten acciones síncronas.

  },
  actions: { 
    //permiten modificar los "states" al igual que las "mutations", pero
    // con permiten modificaciones de forma asíncrona (example: api call).

  },
  modules: { 
    //permiten subdividir el "store" y estructurar a través de sub-elementos

  },
})
