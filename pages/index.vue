<template>
    <div>
        <hr class="h-0.25 bg-black">
        <div class="container mx-auto">
            <Home 
            :category-items="category" 
            :slider-home="sliderHome"
            />
        </div>      
        {{ cat }}
    </div> 
</template>
<script setup lang="ts">
import { FetchCategory } from '~/composables/Category/FetchCategory';
import { useCategory } from '~/composables/Category/useCategory';
import { useSlider } from '~/composables/Home/useSliderData';
const category = useCategory()
const sliderHome = useSlider()
const handleSubmit = () => {
    console.log('Hello')   
}   
const cat = await FetchCategory("HeadPhones")
</script>

