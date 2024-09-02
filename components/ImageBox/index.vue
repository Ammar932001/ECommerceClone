<template>
    <div class="flex flex-col">
        <div class="min-w-[270px] min-h-[250px] bg-[#f5f5f5] w-full flex justify-center items-center">
            <div class="w-[190px] h-[180px]">
                <img :src="imageUrl"  alt="Caraousal first image" />
            </div>
        </div>
        <div class="mt-4">
            <div class="font-medium text-base">
                <span>{{ title }}</span>
            </div>
            <div class="flex gap-2 text-base">
                <span class="text-[#db4444]">{{salePrice}}</span>
                <span>{{originalPrice}}</span>
            </div>
            <div class="flex items-center gap-2">
                <span class="flex"><IconsStar :star-count="ratingStars" /></span>
                <span>({{totalRating}})</span>
            </div>
        </div> 
    </div>
    
</template>

<script setup lang="ts">
 const props = defineProps<{
    imageUrl: string,
    title: string,
    originalPrice: string,
    salePrice: string,
    ratingStars: number,
    totalRating:number 
}>();
const starCount = ref(4)

</script>
