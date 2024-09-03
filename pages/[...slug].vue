<template>
    <div class="container mx-auto">
      <div v-if="!isLoading && data" class="flex gap-10 mt-40" >
        <div class="flex flex-col gap-4">
          <div class="w-[170px] h-[138px] bg-[#f5f5f5] border-[#f5f5f5] flex p-4 justify-center align-center">
            <img src="/pdtgal1.png" alt="" srcset="">
          </div>
          <div class="w-[170px] h-[138px] bg-[#f5f5f5] border-[#f5f5f5] flex p-4 justify-center align-center">
            <img src="/pdtgal2.png" alt="" srcset="">
          </div>
          <div class="w-[170px] h-[138px] bg-[#f5f5f5] border-[#f5f5f5] flex p-4 justify-center align-center">
            <img src="/pdtgal3.png" alt="" srcset="">
          </div>
          <div class="w-[170px] h-[138px] bg-[#f5f5f5] border-[#f5f5f5] flex p-4 justify-center align-center">
            <img src="/pdtgal1.png" alt="" srcset="">
          </div>
            
        </div>
        <div class="w-[500px] h-[600px] bg-[#f5f5f5] flex p-4 justify-center align-center">
           <img :src="data.url" alt="">
        </div>
        <div>
            <h1 class="text-[24px] font-semibold">
                {{ data.title }}
            </h1>
            <div class="flex">
              <IconsStar :star-count="data.ratings"  />
              <p class="text-[#7f7f7f] text-[14px]">({{ data.reviews }} REVIEWS)</p>
            </div>
            <div>
              <span>${{ data.final_price }}</span>
            </div>
            Description
        </div>
    </div>
    </div>
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