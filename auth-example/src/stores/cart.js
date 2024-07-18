import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore('cart', () => {
  //data
  const cart = ref([])
  const totalPrice = ref(0)

  //methods
  const addProduct = (product) => {
    cart.value.push(product)
    totalPrice.value += product.price
  }

  // const deleteProduct = (id) => {
  //   cart.value.splice()
  // }

  return {
    cart,
    totalPrice,
    addProduct,
  }
})
