<template>
  <div class="grid grid-cols-1">
    <div class="navbar-b sticky bottom-10">
      <div
        class="text-end p-2 text-xs mr-10 w-full bg-gradient-to-r from-black from-0% via-sky-900 via-20% to-black to-80%"
      >
        <router-link to="/contactUs">
          <span class="text-gray-400 font-semibold text-xs hover:text-white hover:cursor-default"
            >Contact Us</span
          >
        </router-link>
        <span
          class="text-gray-400 font-semibold text-xs hover:text-white mr-2 ml-3 hover:cursor-default"
          >|</span
        >
        <router-link to="/login">
          <span
            class="text-gray-400 font-semibold text-xs hover:text-white hover:cursor-default mr-9"
            >Log In</span
          >
        </router-link>
      </div>
    </div>
    <div class="header bg-white shadow-lg sticky top-0 z-10 p-1" id="navbar">
      <div class="mx-auto font-sans flex">
        <h2 class="headig font-bold mt-3 ml-6 text-gray-600">
          Ariqt International
          <span class="text-green-500 font-bolder p-1 pb-0 pt-0 text-xs bg-green-500">.</span>
        </h2>
        <div class="p-2">
          <span
            class="text-black text-xs font-semibold hover:text-green-500 hover:cursor-default mr-2 ml-7"
            >Products</span
          >
          <span
            class="text-black text-xs font-semibold hover:text-green-500 hover:cursor-default mr-2 ml-7"
            >Solutions</span
          >
          <span
            class="text-black text-xs font-semibold hover:text-green-500 hover:cursor-default mr-2 ml-10"
            >Resources</span
          >
          <span
            class="text-black text-xs font-semibold hover:text-green-500 hover:cursor-default mr-2 ml-20"
            >Pricing</span
          >
          <span
            class="text-black text-xs font-semibold hover:text-green-500 hover:cursor-default mr-10 ml-10"
            >For candidates</span
          >
          <span
            class="text-black text-xs font-semibold hover:text-green-500 hover:cursor-default mr-2 ml-4"
            >|</span
          >
          <span
            class="text-black bg-gray-100 text-xs font-semibold hover:text-gray-700 p-2 rounded-md hover:cursor-default mr-7 ml-7"
            >Request demo</span
          >
          <button class="button text-xs bg-green-700 p-1.5 pl-2 pr-2 text-white rounded-sm">
            Sign Up
          </button>
        </div>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>

    <div>
      <DetailsCards />
    </div>
  </div>
</template>
<script lang="ts" setup>
import DetailsCards from './components/DetailsCards.vue'
</script>

<style scoped>
</style>
