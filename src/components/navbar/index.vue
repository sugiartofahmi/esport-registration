<script setup lang="ts">
import { ref } from "vue";
const isDropdown = ref(false);
</script>
<template>
  <nav class="flex sticky z-50 top-0 bg-[#00296B] text-white h-auto px-8 py-6 w-full justify-center">
    <div class="flex items-center w-full justify-between">
      <div class="flex ml-5 justify-center items-center">
        <img width="30" src="../../assets/logo.png" alt="" />
        <h1 class="text-[18px]"><span class="text-green-400 ml-2 font-bold">
            IGC</span>
        </h1>
      </div>
      <ul class="hidden md:flex items-center space-x-4 cursor-pointer">
        <router-link to="/">
          <li class=" text-[16px] font-bold hover:text-gray-500">
            Home
          </li>
        </router-link>

        <router-link to="/about">
          <li class=" text-[16px] font-bold hover:text-gray-500">
            About
          </li>
        </router-link>

        <router-link to="/team">
          <li class=" text-[16px] font-bold hover:text-gray-500">
            Team
          </li>
        </router-link>
        <router-link to=/signup>
          <button
            class=" bg-white hover:bg-[#00509D] hover:text-[#FFD500]  text-[#00509D] font-bold py-1 px-3 rounded-full">
            Sign up
          </button>
        </router-link>
        <router-link to=/signin>
          <button
            class=" bg-white hover:bg-[#00509D] hover:text-[#FFD500]  text-[#00509D] font-bold py-1 px-3 rounded-full">
            Sign in
          </button>
        </router-link>
      </ul>
      <ul v-if="isDropdown"
        class="flex transition-all ease-linear bg-[#00509D] px-4 py-2 rounded-lg flex-col justify-start fixed right-3 md:hidden space-y-4 cursor-pointer top-16">
        <router-link to="/">
          <li class=" text-[16px] font-bold hover:text-gray-500">
            Home
          </li>
        </router-link>
        <router-link to="/about">
          <li class=" text-[16px] font-bold hover:text-gray-500">
            About
          </li>
        </router-link>
        <router-link to="/team">
          <li class=" text-[16px] font-bold hover:text-gray-500">
            Team
          </li>
        </router-link>
        <router-link to="/signup">
          <li class=" text-[16px] font-bold hover:text-gray-500">
            Sign up
          </li>
        </router-link>
        <router-link to="/signin">
          <li class=" text-[16px] font-bold hover:text-gray-500">
            Sign in
          </li>
        </router-link>
      </ul>
      <span @click="isDropdown = !isDropdown"
        class="border-2 flex items-center justify-center md:hidden border-[#FFD500] rounded-md p-[2px] text-white">
        Menu
      </span>
    </div>
  </nav>
</template>