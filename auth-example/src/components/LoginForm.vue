<script setup>

</script>

<template>
  <section class="bg-[#cecee2] height-fixed flex items-center">
    <div class="flex flex-col items-center justify-center w-full px-2 py-6 mx-auto">
      <div class="w-full rounded-lg shadow bg-gray-800 max-w-screen-sm">
        <div class="px-4 py-6 space-y-4 md:space-y-6 md:p-8">
          <h1 class="text-lg font-bold leading-tight tracking-tight text-white md:text-2xl">
            Log in to your account
          </h1>
          <p class="text-blue-200">
            Don't have an account yet? 
            <RouterLink
              :to="{ name: 'signup' }"
              class="text-blue-400 underline">
              Sign Up
            </RouterLink>
          </p>
          <form 
            class="space-y-4 md:space-y-6"
            id="login-form"
          >
            <label 
              class="block mb-2 text-sm font-medium text-white"
            >
              Username
              <input
                type="text" 
                name="email" 
                id="email" 
                class="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" 
                placeholder="example:name_007"
                required="true"
                autocomplete="off"
              >
            </label>
            <label 
              class="block mb-2 text-sm font-medium text-white"
            >
              Password
              <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="••••••••" 
                class="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" 
                required="true">
            </label>
            <button 
              class="w-full bg-[#4870A1] rounded-lg px-5 py-2.5">
              <span class="text-xl font-bold text-white">
                Log In
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
