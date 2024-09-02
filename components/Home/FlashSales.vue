<template>
    <div class="container mt-6">
       <div class="flex items-center gap-4">
        <icons-rectangle /><span class="text-base font-semibold text-[#db4444]">Today's</span></div>
       <div class="mt-4">
        <span class="text-3xl font-semibold">Flash Sales</span>

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
       
       <div class="mt-8 flex justify-center"><span class="border bg-[#db4444] rounded-[8px] p-2 text-white">View All Products</span></div>
       
    </div>
</template>
<script setup lang="ts">

const flashSaleItem = [{
    id:1,
    imageUrl:'/carousalflashimg1.png',
    title:'HAVIT HV-G92 Gamepad',
    originalPrice:'$160',
    salePrice: '$120',
    ratingStars: 5,
    totalRating:88
},
{
    id:2,
    imageUrl:'/carousalflashimg2.png',
    title:'AK-900 Wired Keyboard',
    originalPrice:'$1160',
    salePrice: '$960',
    ratingStars: 4,
    totalRating:75
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
{
    id:5,
    imageUrl:'/carousalflashimg2.png',
    title:'AK-900 Wired Keyboard',
    originalPrice:'$1160',
    salePrice: '$960',
    ratingStars: 4,
    totalRating:75
}


]
</script>
