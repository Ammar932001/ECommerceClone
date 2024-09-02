<template>
    <div class="mb-2">
      <top-bar-sale/>  
      <div class="container mx-auto">
        <div class="flex justify-between items-center mt-4">
        <div class="font-bold text-2xl	">
            <nuxt-link to="/">Exclusive</nuxt-link>
        </div>
        <div>
           <ul class="text-base flex gap-4">
            <li v-for="item in MenuItems" :key=item.id>{{item.title}}</li>
           </ul>
        </div>
        <div class="flex items-center gap-2">
            <div class="flex border p-2">
                <input type="text" class="max-w-[210px] " placeholder="What are you Looking for?">
                <icons-search />
            </div>
            <icons-favourites />
            <icons-cart-trolley /> 
          
        </div>
      </div>
      </div>
    </div>
    
</template>


