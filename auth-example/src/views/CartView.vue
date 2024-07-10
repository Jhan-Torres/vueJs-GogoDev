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
    <h1 class="text-4xl text-center">
      My cart
    </h1>
    <div class="flex flex-wrap justify-center mt-4 md:justify-evenly ">
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
          class="flex justify-between"
        >
          <button
            class="text-base font-bold text-white bg-red-500 px-10 py-0.5 rounded-md"
          >
            Delete
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
      class="bg-gray-400 my-5 rounded-lg p-2 md:mx-16"
    >
      <span class="font-bold uppercase text-xl md:text-3xl">
        Total
      </span>
    </article>
  </section>
</template>

<style scoped>

</style>