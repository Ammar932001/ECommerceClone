<template>
    <UContainer>
        <div v-if="!isLoading && data">
        <div class="flex">
            <img :src="data.url" alt="">
            <div>
                <h1>{{ data.title }}</h1>
            </div>
        </div>
           >>>>>{{ data }}
        </div>
        <div v-else>
            <h1>Error Page Not Found</h1>

        </div>

    </UContainer>

    
    
</template>

<script setup>
const isLoading = ref(true)

const route = useRoute()

// console.log(">>>>>route.params", route.params.slug[0])

const { data, pending, error } = await useFetch('/api/getProducts', {
  method: 'POST',
  mode: 'cors', // Changed from 'no-corse' to 'cors'
  headers: {
    'Content-Type': 'application/json'
  },
  body: {
    slug: route.params.slug[0]
  }
})

isLoading.value = pending.value ? true : false

if (error.value) {
  console.error(">>>>>>", error.value)
}
</script>
<style lang="css" scoped>
</style>