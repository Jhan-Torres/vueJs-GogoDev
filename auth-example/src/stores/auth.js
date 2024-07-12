import { defineStore } from 'pinia'
import { BASE_URL } from '../../utils/contants'

export const useAuth = defineStore('auth', () => {
  //data
  const token = null
  const cart = null

  //methods
  const registerUser = async (username, email, password) => {
    const uri = `${BASE_URL}/users`

    const rawResponse = await fetch(uri, {
      method: 'POST',
      body: JSON.stringify({
        email,
        username,
        password,
      }),
    })

    const response = await rawResponse.json()
  }

  const loginUser = async (username, password) => {
    const uri = `${BASE_URL}/auth/login`

    const rawResponse = await fetch(uri, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    })

    const response = await rawResponse.json()
  }

  const getProducts = async () => {
    const uri = `${BASE_URL}/products`

    const rawResponse = await fetch(uri)

    const response = await rawResponse.json()
  }

  const getSingleProduct = async (productId) => {
    const uri = `${BASE_URL}/products/${productId}`

    const rawResponse = await fetch(uri)

    const response = await rawResponse.json()
  }

  //when diferents user types available
  const addProduct = async (product) => {
    const uri = `${BASE_URL}/products`

    const rawResponse = await fetch(uri, {
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

