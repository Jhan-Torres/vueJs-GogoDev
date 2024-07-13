import { defineStore } from 'pinia'
import { BASE_URL } from '../../utils/contants'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  //data
  const token = ref(null)

  //methods

  //setToken (value) => {
    //token.value = value
  //}
  const registerUser = async (user) => {
    const rawResponse = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      body: JSON.stringify({
        email: user.email,
        username: user.username,
        password: user.password,
      }),
    })

    const response = await rawResponse.json()

    if(!response.id) {
      return 'Error'
    }

    return 'Success, user logged'
  }

  const loginUser = async (user) => {
    const uri = `${BASE_URL}/auth/login`

    const rawResponse = await fetch(uri, {
      method: 'POST',
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      }),
    })

    const response = await rawResponse.json()
  }

  const getProducts = async () => {
    const rawResponse = await fetch(`${BASE_URL}/products`)

    const response = await rawResponse.json()
  }

  const getSingleProduct = async (productId) => {
    const rawResponse = await fetch(`${BASE_URL}/products/${productId}`)

    const response = await rawResponse.json()
  }

  //when diferents user types available
  const addProduct = async (product) => {
    const rawResponse = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      body: JSON.stringify(
        {
          title: product.title,
          price: product.price,
          description: product.description,
          image: 'https://i.pravatar.cc',
          category: product.category,
        }
      )
    })

    const response = await rawResponse.json()
  }

  return {
    token,
    registerUser,
    loginUser,
    getProducts,
    getSingleProduct,
    addProduct,
  }
})

