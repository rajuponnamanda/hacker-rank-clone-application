<template>
  <div class="grid grid-cols-2">
    <div
      class="mainCard h-[120vh] bg-gradient-to-br from-white from-10% via-sky-50 via-20% to-green-100 to-80%"
    >
      <div class="text-center mt-32 w-80 ml-16">
        <span class="bg-green-600 text-white text-[10px] rounded-sm pl-2 pr-2 font-bold"
          >BUSSINESS</span
        >
        <h1 class="font text-[25px] text-gray-600">
          <span class="text-gray-500 text-[25px]">For </span
          ><span class="text-green-600">Componies</span>
        </h1>
        <p class="p-6 font-semibold text-gray-700 text-md">
          We are the market-leading technical interview platform to identity and hire developers
          with the right skills
        </p>
        <button
          class="button bg-green-700 p-1 rounded-sm text-white font-semibold pl-12 pr-12 mb-10 text-xl"
        >
          Login
        </button>
        <p>Don't have an acoount?</p>
        <h1>
          <span class="hover:underline">Contact Sales</span> <span class="text-gray-500">or</span>
          <span class="hover:underline">Get free trail </span>
        </h1>
      </div>
    </div>
    <div>
      <div class="text-center mt-32 w-80 ml-16">
        <h1 class="font text-[25px] text-gray-600">
          <span class="text-gray-500 text-[25px]">For </span
          ><span class="text-sky-700">Developers</span>
        </h1>
        <p class="p-6 font-semibold text-gray-700 text-md">
          Join over 21 million developers, practice coding skills, prepare for interviews, and get
          hired.
        </p>
        <button
          class="border-2 border-black p-2 rounded-lg text-black font-normal hover:bg-black hover:text-white text-xs pl-10 pr-10 mb-10"
        >
          Login
        </button>
        <p>Don't have an acoount?</p>
        <h1><span class="hover:underline text-sm hover:cursor-pointer">Sign Up</span></h1>
      </div>
    </div>
    <ClientImage />
  </div>
</template>

<script setup lang="ts">
import ClientImage from './ClientImages.vue'
</script>

<style scoped></style>
