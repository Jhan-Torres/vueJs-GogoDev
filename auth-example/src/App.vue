<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-[#1F2D40] px-10 flex items-center justify-between">
    <nav 
      class="flex justify-center items-center font-semibold h-20"
    >
      <RouterLink 
        to="/"
        class="mx-3 text-gray-100"
      >
        Home
      </RouterLink> |
      <RouterLink 
        to="/products"
        class="mx-3 text-gray-100"
      >
        Products
      </RouterLink> |
      <RouterLink 
        to="/cart"
        class="mx-3 text-gray-100"
      >
        Cart
      </RouterLink>
    </nav>
    <button class="bg-[#5d8dc7] px-10 py-2 rounded-lg hover:bg-[#5084C4]">
      <span class="text-white font-bold uppercase">
        Login
      </span>
    </button>
  </header>

  <main
    class="height-fixed"
  >
    <RouterView />
  </main>

  <footer
    class="bg-[#1F2D40] h-14 text-gray-100 flex items-center justify-center"
  >
    <p>By <a href="https://fakestoreapi.com/docs" target="_blank" class="underline">fakestoreapi</a></p>
  </footer>
</template>

<style>
.router-link-active {
  color: #F9F16F;
}

.height-fixed {
  min-height: calc(100vh - 136px);
}
</style>
