<script setup>
import { onMounted, ref } from 'vue';

const myCart = ref([])

const getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products?limit=4')

  myCart.value = await response.json()
}

onMounted(() => {
  getProducts()
})
</script>

<template>
  <section
    class="bg-[#cecee2] p-3 height-fixed text-2xl"
  >
    <h1 class="text-4xl text-center font-semibold pb-4 mx-10 border-b-2 border-gray-200">
      My cart ({{ myCart.length }})
    </h1>
    <div class="flex flex-wrap justify-center mt-4 md:justify-evenly">
      <section
        v-for="item in myCart"
        :key="item.id"
        class="m-2 h-64 w-[280px] bg-[#FFFFFF] rounded-lg p-2 shadow-lg"
      >
        <h2
          class="text-base text-[#363234] font-semibold text-center h-10"
        >
          {{ item.title }}
        </h2>
        <div class="my-5 flex justify-center items-center">
          <img 
            :src="item.image" 
            alt="cart product image"
            class="w-20 h-28"
          >
          <span class="text-base mx-4 font-bold">
            ${{ item.price }}
          </span>
        </div>
        <div
          class="flex justify-between px-4"
        >
          <button
            class="text-base font-bold text-white bg-red-600 px-8 py-0.5 rounded-md hover:bg-red-500"
          >
            Remove
          </button>
          <RouterLink
            :to="{ name: 'product-detail', params: { id: item.id } }"
            class="text-base font-semibold underline text-blue-500 px-8 py-0.5 rounded-md"
          >
            Details
          </RouterLink>
        </div>
      </section>
    </div>
    <article
      class="bg-gray-400 my-4 rounded-md px-8 py-4 min-w-[300px] max-w-[500px] mx-auto shadow-md"
    >
      <p class="uppercase text-xl text-center border-b-2 border-gray-500">
        Total: <span class="font-bold">$300</span>
      </p>
      <div class="flex items-center mt-2 justify-evenly">
        <label class="flex items-center">
          <input 
            type="radio" 
            name="credit-card-type"
          >
          <span class="text-base mx-1">
            Debit Card
          </span>
        </label>
        <label class="flex items-center my-2">
          <input 
            type="radio" 
            name="credit-card-type"
          >
          <span class="text-base mx-1">
            Credit Card
          </span>
        </label>
      </div>
      <input 
        type="text"
        name="card-number"
        class="w-full px-2 py-1.5 text-base rounded-md my-3"
        placeholder="Type your card number"
      >
      <input 
        type="text"
        name="card-cvc"
        class="w-full px-2 py-1.5 text-base rounded-md"
        placeholder="Type your cvc card number"
      >
      <div class="flex justify-center items-center mt-4">
        <button
          class="px-20 py-1.5 bg-[#5084C4] rounded-lg hover:bg-[#6a9bd8] duration-100"
        >
          <span class="uppercase font-bold">Pagar</span>
        </button>
      </div>
    </article>
  </section>
</template>

<style scoped>

</style>