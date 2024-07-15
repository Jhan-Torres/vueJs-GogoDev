<script setup>
import ItemCard from '@/components/ItemCard.vue'
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
    class="flex flex-wrap justify-around bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
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