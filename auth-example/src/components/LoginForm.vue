<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useFetch } from '@/composables/useFetch';
import { useRouter } from 'vue-router';

const user = ref({})
const store = useAuthStore()
const router = useRouter()

const loginUser = async () => {
  //validate fields
  if(!(user.value.username && user.value.password)) {
    return
  }

  //api endpoint "auth/login" has error, so i gonna use "users" endpoint
  const rawResponse = await useFetch('users', {
    method: 'POST',
    body: JSON.stringify(user.value)
  })

  const response = await rawResponse

  //auth error
  if(!response.id) {
    console.log("error");
    return
  }

  //static token due api
  store.setToken('eyJhbGciOiJIUzI1NiIsInR')
  router.push({name: 'home'})
}
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
                v-model="user.username"
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
                required="true"
                v-model="user.password"
              >
            </label>
            <button
              @click.prevent="loginUser"
              class="w-full bg-[#4870A1] rounded-lg px-5 py-2.5"
            >
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
