<script setup>
import LogInForm from '@/components/LogInForm.vue';
</script>

<template>
  <div class="bg-black-and-white w-full h-full">
    <LogInForm />
  </div>
</template>

<style scoped>
.bg-black-and-white {
  background-image: url('../../public/img/background/black-and-white.svg');
  background-size: cover;
  background-attachment: fixed;
}
</style>