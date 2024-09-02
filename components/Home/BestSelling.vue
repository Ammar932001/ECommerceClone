<template>
    <div class="container mt-6">
       <div class="flex items-center gap-4">
        <icons-rectangle /><span class="text-base font-semibold text-[#db4444]">This Month</span></div>
       <div class="mt-4 flex justify-between">
        <span class="text-3xl font-semibold">Best Selling Products</span>
        <span class="border bg-[#db4444] rounded-[8px] p-2 text-white">View All</span>
       </div>
       <div class="flex gap-6" >
        <div class="mt-4 max-w-[270px] max-h-[350px]" v-for="item in flashSaleItem" :key="item.id">
           <image-box 
           :image-url="item.imageUrl"
           :title="item.title"
           :original-price="item.originalPrice"
           :sale-price="item.salePrice"
           :rating-stars="item.ratingStars"
           :total-rating="item.totalRating"       
           />
       </div>  
       </div>
       <hr class="h-0.25 bg-black mt-8 mb-8">

    </div>
</template>
<script setup lang="ts">

const flashSaleItem = [{
    id:1,
    imageUrl:'/carousalflashimg1.png',
    title:'The north coat',
    originalPrice:'$160',
    salePrice: '$360',
    ratingStars: 5,
    totalRating:65
},
{
    id:2,
    imageUrl:'/carousalflashimg2.png',
    title:'Gucci duffle bag',
    originalPrice:'$1160',
    salePrice: '$960',
    ratingStars: 4,
    totalRating:65
},
{
    id:3,
    imageUrl:'/carousalflashimg3.png',
    title:'IPS LCD Gaming Monitor',
    originalPrice:'$400',
    salePrice: '$370',
    ratingStars: 5,
    totalRating:99
},
{
    id:4,
    imageUrl:'/carousalflashimg1.png',
    title:'HAVIT HV-G92 Gamepad',
    originalPrice:'$160',
    salePrice: '$120',
    ratingStars: 5,
    totalRating:88
},



]
</script>
