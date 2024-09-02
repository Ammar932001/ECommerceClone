<template>
    <div class="flex">
      <div class="mt-4">
        <div class="w-[300px]">
          <ul class="text-base flex flex-col gap-2">
            <li class="flex justify-between" v-for="item in categoryItems" :key="item.id">
              {{ item.title }} 
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-4 flex ml-6">
        <img :src="currentImage" alt="carousel image" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  const props = defineProps<{
    categoryItems: { id: number; title: string; url: string }[]
    sliderHome: { id: number; title?: string; url: string }[]
  }>();
  
  const currentIndex = ref(0);
  const currentImage = ref('');
  
  if (props.sliderHome.length > 0) {
    currentImage.value = props.sliderHome[0].url;
  }
  
  const updateImage = (index = 0) => {
    if (props.sliderHome.length > 0) {
      currentIndex.value = index % props.sliderHome.length;
      currentImage.value = props.sliderHome[currentIndex.value].url;
  
      setTimeout(() => updateImage(currentIndex.value + 1), 4000);
    }
  };
  
  onMounted(() => {
    updateImage();
  });
  
  </script>
  
 
  