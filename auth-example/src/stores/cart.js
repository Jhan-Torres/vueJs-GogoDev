import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore('cart', () => {
  //data
  const cart = ref([])

  //methods
  const addProduct = (product) => {
    cart.value.push(product)
  }

  const getTotal = () => {

  }

  return {
    cart,
    addProduct,
    getTotal,
  }
})
