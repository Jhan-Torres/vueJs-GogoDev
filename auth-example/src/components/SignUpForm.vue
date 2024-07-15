<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useFetch } from '@/composables/useFetch';
import { useRouter } from 'vue-router';

const store = useAuthStore()
const user = ref({})
const router = useRouter()

const registerUser = async () => {
  //validate fields
  if(!(user.value.username && user.value.email && user.value.password)) {
    return
  }

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
              Log In
            </RouterLink>
          </p>
          <form 
            class="space-y-2"
            id="signup-form"
          >
            <label class="block mb-2 text-sm font-medium text-white">
              Username
              <input 
                type="text"
                class="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" 
                placeholder="example:name_007" 
                required="true"
                v-model="user.username"
              >
            </label>
            <label class="block mb-2 text-sm font-medium text-white">
              Your email
              <input 
                type="email"
                class="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" 
                placeholder="name@company.com" 
                required="true"
                v-model="user.email"
              >
            </label>
            <label class="block mb-2 text-sm font-medium text-white">
              Password
              <input 
                type="password"
                placeholder="••••••••" 
                class="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" 
                required="true"
                v-model="user.password"
              >
            </label>
            <label class="block mb-2 text-sm font-medium text-white">
              Cofirm password
              <input 
                type="password"
                placeholder="••••••••" 
                class="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" 
                required="true"
              >
            </label>
            <button
              @click.prevent="registerUser"
              class="w-full bg-[#4870A1] rounded-lg px-5 py-2.5"
            >
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
