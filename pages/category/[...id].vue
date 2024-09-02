<template>
    <div>
        Category IID is {{ id }}
        
    </div>
</template>

<script setup>
const route = useRoute()
let id = route.params.id
</script>

<style lang="scss" scoped>

</style>