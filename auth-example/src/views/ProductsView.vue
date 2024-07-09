<script setup>
import ItemCard from '@/components/ItemCard.vue'
import { onMounted, ref } from 'vue';

const products = ref([]);

const getAllProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products')

  products.value = await response.json()
}

onMounted(() => {
  getAllProducts();
})
</script>

<template>
  <h1>Products View</h1>
  <section
    class="flex flex-wrap justify-around"
  >
    <ItemCard 
      v-for="product in products"
      :key="product.id"
      :item="product"
    />
  </section>
</template>

<style scoped>

</style>