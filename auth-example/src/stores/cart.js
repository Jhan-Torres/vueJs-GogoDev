import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore('cart', () => {
  //data
  const cart = ref([])

  //methods
  const addProduct = (product) => {
    cart.value.push(product)
  }

  // const deleteProduct = (id) => {
  //   cart.value.splice()
  // }

  const getTotalPrice = () => {
    
  }

  return {
    cart,
    addProduct,
    getTotalPrice,
  }
})
