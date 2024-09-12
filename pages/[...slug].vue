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
        <div class="w-[500px] h-[600px] bg-[#f5f5f5] flex p-14 justify-center align-center">
           <img src="/pdt_main.png" alt="">
        </div>
        <div class="ml-8">
            <h1 class="text-[24px] font-semibold">
                {{ data.title }}
            </h1>
            <div class="flex my-4">
              <IconsStar :star-count="data.ratings"  />
              <p class="text-[#7f7f7f] text-[14px] ml-4">({{ data.reviews }}  REVIEWS)</p>
            </div>
            <div>
              <span class="text-[24px]">${{ data.final_price }}</span>
            </div>
            <div class="py-4 mb-4">
              <p class="text-[14px]">{{ data.description }}</p>
            </div>
            <hr>
            <div class="my-4" v-if="data.colors">
              <h1 class="text-[24px] font-semibold">Colour</h1>
              <span class="my-2">Please select a colour</span>
              <div class="flex gap-4 mt-2">
                <div
                  v-for="color in colors"
                  :key="color"
                  @click="selectColor(color)"
                  class=""
                  :class="[
                    'w-8 h-8 rounded-full cursor-pointer border-2',
                    selectedColor === color ? 'border-black' : 'border-transparent',
                    `bg-${color}-500`
                  ]"
                >
                 <!-- Content inside the color circle, if needed -->
                </div>
              </div>
              <div v-if="selectedColor" class="mt-4">
                Selected Color: <span :class="`text-${selectedColor}-500`">{{ selectedColor }}</span>
              </div>
            </div>  
            <div class="flex justify-between">
              <div>
                <input type="number" placeholder="Enter Quantity" class="border p-4 rounded-full w-[170px]" v-model="qty">
                x {{ data.final_price }} = {{ qty * data.final_price }}
              </div>
              
              <button class="bg-[#db4444] text-white py-2 px-4 rounded-[8px]">Add to Cart</button>
            </div>        
            
        </div>
        <!--  -->
    </div>
    <div class="bg-aqua mt-8 p-4">
    <!-- Tab Headers -->
    <div class="flex space-x-4 border-b">
      <button
        @click="setActiveTab(1)"
        :class="activeTab === 1 ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'"
        class="py-2 focus:outline-none"
      >
        Description
      </button>
      <button
        @click="setActiveTab(2)"
        :class="activeTab === 2 ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'"
        class="py-2 focus:outline-none"
      >
        Reviews
      </button>
      <button
        @click="setActiveTab(3)"
        :class="activeTab === 3 ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'"
        class="py-2 focus:outline-none"
      >
        More Information
      </button>
    </div>

    <!-- Tab Content -->
    <div class="mt-4">
      <div v-if="activeTab === 1" class="p-4 bg-white rounded shadow">
        <p>No Description Content Available</p>
      </div>
      <div v-if="activeTab === 2" class="p-4 bg-white rounded shadow">
        <p>No Review Content Available</p>
      </div>
      <div v-if="activeTab === 3" class="p-4 bg-white rounded shadow">
        <p>No Information Available</p>
      </div>
    </div>
    </div>
    </div>
</template>

<script setup>
const isLoading = ref(true)
const qty = ref(1)

const route = useRoute()
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
const activeTab = ref(1);

// Method to set the active tab
const setActiveTab = (tabNumber) => {
  activeTab.value = tabNumber;
};
console.log(">>>>>", data.value.colors)
const colors = data.value.colors
const selectedColor = ref(null);

// Method to select a color
const selectColor = (color) => {
  selectedColor.value = color;
};


</script>
<style lang="css" scoped>
</style>