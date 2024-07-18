<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section
    class="w-60 my-5 mx-2 rounded-lg shadow-md shadow-gray-400"
  >
    <div class="flex justify-center w-full">
      <img
        :src="item.image"
        alt="product image"
        class="object-contain h-72 img-custom-gradient hover:scale-110 duration-200"
      >
    </div>
    <div class="px-2 py-3">
      <div class="flex justify-end">
        <span 
          class="text-[#f2ece4] bg-[#313239] text-sm px-3 py-0.5 rounded-lg font-semibold"
        >
          {{ item.category }}
        </span>
      </div>
      <h2
        class="text-[#4A1F43] font-bold text-lg my-3 truncate"
      >
        {{ item.title }}
      </h2>
      <div class="flex flex-col justify-center space-y-2 text-lg font-semibold">
        <RouterLink
          :to="{ name: 'product-detail', params: { id: item.id } }"
          class="bg-[#4A1F43] py-1.5 px-20 hover:bg-[#5f2c57] hover:scale-105 duration-150 rounded-md"
        >
          <span 
            class="text-white tracking-wide"
          >
            Details
          </span>
        </RouterLink>
        <button
          class="bg-[#5084C4] py-1.5 rounded-md hover:bg-[#70a2df] hover:scale-105 duration-150"
        >
          Add to cart
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.img-custom-gradient {
  mask-image: linear-gradient(
    black 95%,
    transparent
  );
}
</style>