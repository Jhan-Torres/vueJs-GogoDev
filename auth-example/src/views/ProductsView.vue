<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { onMounted, ref } from 'vue';
import { useFetch } from '@/composables/useFetch';

const products = ref([]);

const getAllProducts = async () => {
  products.value = await useFetch('products')
}

onMounted(() => {
  getAllProducts();
})
</script>

<template>
  <section
    class="flex flex-wrap justify-around"
  >
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :item="product"
    />
  </section>
</template>
