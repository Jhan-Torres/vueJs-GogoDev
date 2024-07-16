<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useFetch } from '@/composables/useFetch';

const productId = useRoute().params.id;
const product = ref({});

const getSingleProduct = async () => {
  const rawResponse = await useFetch(`products/${productId}`)
  
  product.value = await rawResponse
}

onMounted(() => {
  getSingleProduct();
})
</script>

<template>
  <section
    class="p-2 height-fixed flex justify-around items-center flex-wrap"
  >
    <section
    >
      <img
        :src="product.image" 
        alt="product image"
        class="shadow-lg rounded-2xl max-h-[400px] min-w-[300px]"
      >
    </section>

    <section class="px-3 md:max-w-[40%]">
      <h1
        class="text-2xl font-semibold text-[#3b161d] text-center mt-4 md:mt-0"
      >
        {{ product.title }}  
      </h1>
      <div class="flex justify-between items-center font-bold text-base my-5">
        <span
          class="text-xl"
        >
          ${{ product.price }}
        </span>
        <span
          class="bg-[#325068] text-[#f4b346] py-0.5 px-5 rounded-lg"
        >
          {{ product.category }}
        </span>
      </div>
      <p class="px-2">
        {{ product.description }}
      </p>
      <div class="flex flex-col justify-center items-center my-4">
        <button
          class="bg-[#688f99] text-[#000000] my-4 py-1.5 px-20 font-bold rounded-lg"
          >
          Add to cart
        </button>
        <RouterLink
          :to="{ name: 'cart' }"
          class="text-[#363234] underline font-bold rounded-lg"
        >
          Go to my cart
        </RouterLink>
      </div>
    </section>
  </section>
</template>

<style scoped>

</style>