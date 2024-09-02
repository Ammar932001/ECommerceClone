<template>
  <div class="mb-2">
    <top-bar-sale/>  
    <div class="container mx-auto">
      <div class="flex justify-between items-center mt-4">
        <div class="font-bold text-2xl">
          <nuxt-link to="/">Exclusive</nuxt-link>
        </div>
        <div>
          <ul class="text-base flex gap-4">
            <li v-for="item in MenuItems" :key="item.id" class="relative">
              <span><nuxt-link to="/">{{ item.title }}</nuxt-link></span>
              <!-- Check if the item has subItems -->
              <ul v-if="item.subItems" class="absolute bg-white shadow-md mt-2">
                <li v-for="subItem in item.subItems" :key="subItem.id" class="px-4 py-2" v-if="true">
                  <nuxt-link :to="`/category/${subItem.categoryId}`">{{ subItem.title }}</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="flex items-center gap-2">
          <div class="flex border p-2">
            <input type="text" class="max-w-[210px]" placeholder="What are you Looking for?">
            <icons-search />
          </div>
          <icons-favourites />
          <icons-cart-trolley /> 
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>


