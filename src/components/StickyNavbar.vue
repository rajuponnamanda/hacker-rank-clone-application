<template>
  <div>
    <div class="grid grid-cols-2">
      <div
        class="mainCard h-[120vh] bg-gradient-to-br from-white from-10% via-green-100 via-20% to-sky-100 to-80%"
      >
        <div class="text-center mt-32">
          <h1 class="font text-[25px] text-gray-600">
            <span class="text-green-600 text-[25px]">Hire </span> with HackerRank
          </h1>
          <p class="p-7 font-semibold text-gray-700">
            We are the market-leading technical interview platform to identify and hire developers
            with the right skills.
          </p>
          <button
            class="button bg-green-700 p-2 rounded-sm text-white font-semibold pl-5 pr-5 mb-10"
          >
            Request Demo
          </button>
        </div>
        <p href="" class="font-semibold text-center hover:underline">Start free trail</p>
      </div>
      <div>
        <div class="text-center mt-32">
          <h1 class="font text-[25px] text-gray-600">
            <span class="text-sky-700 text-[30px]">Practice </span> with HackerRank
          </h1>
          <p class="p-7 font-semibold text-gray-700 text-md">
            Join over 21 million developers, practice coding skills, prepare for interviews, and get
            hired.
          </p>
          <button
            class="border-2 border-black p-2 rounded-lg text-black font-normal hover:bg-black hover:text-white text-xs pl-4 pr-4 mb-10"
          >
            Sign up & Code
          </button>
        </div>
      </div>
      <ClientImage/>
    </div>
  </div>
</template>

<script setup lang="ts">
import ClientImage from './ClientImages.vue'
</script>

<style scoped></style>
