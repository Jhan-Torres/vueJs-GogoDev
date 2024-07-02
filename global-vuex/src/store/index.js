import { createStore } from "vuex";

export default createStore({
  state: { 
    //todos los datos que va a tener el store
    counter: 1,
  },
  getters: { 
    //métodos para obtener la información de un "state", además de otros valores
    //que se pueden modificar en el flujo (parecido a los "computed")
    times2(state) {
      return state.counter * 2
    },
  },
  mutations: { 
    //métodos equivalentes a los setter, para modificar los "states", 
    //solo permiten acciones síncronas.
    setCounter(state, value) { //(elemento a modificar, valores que necesita)
      state.counter = value;
    },
  },
  actions: { 
    //permiten modificar los "states" al igual que las "mutations", pero
    // con permiten modificaciones de forma asíncrona (example: api call).

  },
  modules: { 
    //permiten subdividir el "store" y estructurar a través de sub-elementos
    
  },
})
