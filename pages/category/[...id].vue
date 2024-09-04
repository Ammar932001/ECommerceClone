<template>
    <div class="container mx-auto">
        <div class="flex gap-6">
        <div class="mt-4 max-w-[270px] max-h-[350px]" v-for="item in cat" :key="cat">
        <nuxt-link to="">
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
    </div>
</template>
<script setup>
import { FetchCategory } from '~/composables/Category/FetchCategory';
const route = useRoute()
let id = parseInt(route.params.id)
const cat = await FetchCategory(id)
</script>