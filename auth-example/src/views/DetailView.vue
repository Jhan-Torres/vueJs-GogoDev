<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const productId = useRoute().params.id;
const product = ref({});

const getSingleProduct = async () => {
  const response = await fetch(`https://fakestoreapi.com/products/${ productId }`)
  
  product.value = await response.json();
}

onMounted(() => {
  getSingleProduct();
})
</script>

<template>
  <section
    class="bg-[#cecee2] p-2 height-fixed flex justify-around items-center flex-wrap"
  >
    <section
    >
      <img
        :src="product.image" 
        alt="product image"
        class="shadow-lg rounded-2xl max-h-[490px] min-w-[300px] max-w-[550px]"
      >
    </section>

    <section class="md:max-w-[35%]">
      <h1
        class="text-xl font-semibold text-[#3b161d] text-center"
      >
        {{ product.title }}  
      </h1>
      <div class="flex justify-between items-center font-bold text-base my-5">
        <span
          class="underline"
        >
          ${{ product.price }}
        </span>
        <span
          class="bg-[#325068] text-[#f4b346] py-1 px-5 rounded-lg"
        >
          {{ product.category }}
        </span>
      </div>
      <p>
        {{ product.description }}
      </p>
      <button
        class="w-full bg-[#363234] text-[#c8d7d2] mt-4 py-1.5 font-bold rounded-lg"
      >
        Buy now
      </button>
    </section>
  </section>
</template>

<style scoped>

</style>