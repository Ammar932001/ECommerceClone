<template>
    <div>
        <hr class="h-0.25 bg-black">
        <div class="container mx-auto">
            <Home 
            :category-items="category" 
            :slider-home="sliderHome"
            :flash-sale-items="flashitem"
            :best-selling="bestSelling"
            />
        </div>  
        {{ bestSelling }}    
    </div> 
</template>
<script setup lang="ts">
import { useCategory } from '~/composables/Category/useCategory';
import { useSlider } from '~/composables/Home/useSliderData';
import { useFlashSale } from '~/composables/Home/useFlashSale';
const category = useCategory()
const sliderHome = useSlider()
   
const flashitem = await useFlashSale('flash_sale')
const bestSelling = await useFlashSale('best_selling')

</script>

