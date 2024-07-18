<script setup>
import { useCartStore } from '@/stores/cart';
import { onMounted, ref } from 'vue';
import CartCard from '@/components/CartCard.vue'

const cartStore = useCartStore()
const items = ref()

const getAllCart = () => {
  items.value = cartStore.cart
}

onMounted(() => {
  getAllCart()
})
</script>

<template>
  <section
    class="bg-waves p-3 height-fixed text-2xl"
  >
    <h1 class="text-4xl text-center font-semibold pb-4 mx-10 border-b-2 border-gray-200 text-white">
      My cart ({{ cartStore.cart.length }})
    </h1>
    <div
      v-if="cartStore.cart.length === 0"
      class="flex flex-col justify-center items-center"
    >
      <h2 class="my-10 text-4xl text-red-400 font-bold">
        Nothing to see yet!
      </h2>
      <RouterLink
        :to="{ name: 'products' }"
        class="text-xl first-letter:uppercase text-white hover:bg-[#5084C4] font-bold px-10 py-4 bg-[#415B7F] rounded-lg"
      >
        view products
      </RouterLink>
    </div>
    <div class="flex flex-wrap justify-center mt-4 md:justify-evenly">
      <CartCard
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </div>
    <article
      class="bg-gray-400 my-4 rounded-md px-8 py-4 min-w-[300px] max-w-[500px] mx-auto shadow-md"
      v-if="cartStore.cart.length != 0"
    >
      <p class="uppercase text-xl text-center border-b-2 border-gray-500">
        Total: <strong>{{ cartStore.totalPrice }}</strong>
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