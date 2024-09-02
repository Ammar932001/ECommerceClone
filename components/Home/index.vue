<template>
    <div>
        <home-slider 
        :category-items="categoryItems" 
        :slider-home="sliderHome"
        /> 
        <home-flash-sales />
        <home-category-box /> 
        <home-best-selling />
        <home-category-banner />
        <home-free-shipping />  
        
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  categoryItems: { id: number; title: string; url: string }[],
  sliderHome: { id: number; title?: string; url: string }[],
}>();
</script>

