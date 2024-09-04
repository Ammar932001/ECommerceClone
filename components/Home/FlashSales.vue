<template>
    <div class="container mt-6">
       <div class="flex items-center gap-4">
        <icons-rectangle /><span class="text-base font-semibold text-[#db4444]">Today's</span></div>
       <div class="mt-4">
        <span class="text-3xl font-semibold">Flash Sales</span>
       </div>
       <div class="flex gap-6" >
        <div class="mt-4 max-w-[270px] max-h-[350px]" v-for="item in flashSaleItems" :key="item.id">
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
       <div class="mt-8 flex justify-center"><span class="border bg-[#db4444] rounded-[8px] p-2 text-white">View All Products</span></div>  
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  flashSaleItems: { id: any; title: any; url: string; original_price: any; stars: any; reviews: any; final_price: any; }[],
}>();
</script>
