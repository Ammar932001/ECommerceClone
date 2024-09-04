<template>
    <div>
        <home-slider 
        :category-items="categoryItems" 
        :slider-home="sliderHome"
        /> 
        <home-flash-sales 
        :flash-sale-items="flashSaleItems"
        />
        <home-category-box /> 
        <home-best-selling
        :best-selling="bestSelling"
        />
        <home-category-banner />
        <home-free-shipping />  
        
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  categoryItems: { id: number; title: string; url: string }[],
  sliderHome: { id: number; title?: string; url: string }[],
  flashSaleItems: { id: any; title: any; url: string; original_price: any; stars: any; reviews: any; final_price: any; }[],
  bestSelling: { id: any; title: any; url: string; original_price: any; stars: any; reviews: any; final_price: any; }[],
}>();
</script>

