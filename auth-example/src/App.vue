<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="py-5 bg-[#1F2D40]">
      <nav 
        class="flex justify-center items-center font-semibold"
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
    </div>
  </header>

  <RouterView />
</template>

<style>
.router-link-active {
  color: #F9F16F;
}
</style>
