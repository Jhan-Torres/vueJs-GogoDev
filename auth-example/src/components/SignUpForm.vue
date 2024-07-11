<script setup>

</script>

<template>
  <section class="bg-[#cecee2] height-fixed flex items-center">
    <div class="flex flex-col items-center justify-center w-full px-2 py-4 mx-auto">
      <div class="w-full rounded-lg shadow bg-gray-800 max-w-screen-sm">
        <div class="p-6 space-y-4">
          <h1 class="text-lg font-bold leading-tight tracking-tight text-white md:text-2xl">
            Create an account
          </h1>
          <p class="text-blue-200">
            Have an account already? 
            <RouterLink
              :to="{ name: 'login' }"
              class="text-blue-400 underline"
            >
              Log in
            </RouterLink>
          </p>
          <form class="space-y-2">
            <label class="block mb-2 text-sm font-medium text-white">
              Your full name
              <input 
                type="email"
                class="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" 
                placeholder="name@company.com" 
                required="true">
            </label>
            <label class="block mb-2 text-sm font-medium text-white">
              Your email
              <input 
                type="email"
                class="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" 
                placeholder="name@company.com" 
                required="true">
            </label>
            <label class="block mb-2 text-sm font-medium text-white">
              Password
              <input 
                type="password"
                placeholder="••••••••" 
                class="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" 
                required="true">
            </label>
            <label class="block mb-2 text-sm font-medium text-white">
              Confirm password
              <input 
                type="password"
                placeholder="••••••••" 
                class="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" 
                required="true">
            </label>
            <button 
              class="w-full bg-[#4870A1] rounded-lg px-5 py-2.5">
              <span class="text-xl font-bold text-white">
                Sign In
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
