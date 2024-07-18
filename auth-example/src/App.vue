<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-[#1F2D40] px-1 flex items-center justify-between md:px-10">
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
    <RouterLink 
      :to="{ name: 'login' }"  
      class="bg-[#5d8dc7] px-6 py-2 rounded-lg hover:bg-[#5084C4] md:px-10"
    >
      <span class="text-white font-bold uppercase">
        Login
      </span>
    </RouterLink>
  </header>

  <main
    class="height-fixed"
  >
    <RouterView />
  </main>

  <footer
    class="bg-[#1F2D40] h-20 text-gray-100 flex items-center justify-center"
  >
    <p class="text-sm md:text-lg">
      Supported by 
      <a 
        href="https://fakestoreapi.com/docs" 
        target="_blank" 
        class="text-blue-400 font-bold"
      >
        fakeStoreApi
      </a> 
      |
      <a 
        href="https://haikei.app/"
        target="_blank" 
        class="text-blue-400 font-bold"
      >
        Haikei
      </a>
    </p>
  </footer>
</template>

<style>
.router-link-active {
  color: #F9F16F;
}

.height-fixed {
  min-height: calc(100vh - 160px);
}
</style>
