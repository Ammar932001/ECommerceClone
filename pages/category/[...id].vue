<template>
    <div v-for="item in cat" :key="cat">
        {{ item.id }}
        {{ item.url }}
        {{ item.title }}
        
        
    </div>
</template>

<script setup>
import { FetchCategory } from '~/composables/Category/FetchCategory';

const route = useRoute()
let id = parseInt(route.params.id)
const cat = await FetchCategory(id)
console.log(">>>>>cat", cat)
</script>

<style lang="scss" scoped>

</style>