<template>
    <div class="container mt-6">
       <div class="flex items-center gap-4">
        <icons-rectangle /><span class="text-base font-semibold text-[#db4444]">This Month</span></div>
       <div class="mt-4">
        <span class="text-3xl font-semibold">Best Selling Products</span>
       </div>
       <div class="flex gap-6" >
        <div class="mt-4 max-w-[270px] max-h-[350px]" v-for="item in bestSelling" :key="item.id">
          <nuxt-link :to="`/${item.id}`">
           <image-box 
           :image-url="item.url"
           :title="item.title"
           :original-price="item.original_price"
           :sale-price="item.final_price"
           :rating-stars="item.stars"
           :total-rating="item.reviews"       
           />
           </nuxt-link>
       </div>
       </div>
       <hr class="h-0.25 bg-black mt-8 mb-8">  
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  bestSelling: { id: any; title: any; url: string; original_price: any; stars: any; reviews: any; final_price: any; }[],
}>();
</script>