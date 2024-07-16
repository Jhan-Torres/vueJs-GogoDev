<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section
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
</template>

<style scoped>

</style>
