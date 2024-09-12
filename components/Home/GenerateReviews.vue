<template>
    <div class="bg-[#F5F5F5]">
        <UContainer>
        <div class="flex md:h-[650px] justify-between pt-[32px] max-md:flex-wrap">
            <div class="max-md:w-full">
                <h3 class="text-[#19647B] text-[34px] mb-3 pt-[50px] max-md:pt-[20px] max-md:text-[20px] max-md:font-semibold">Rated 5 out of 5 stars <br class="max-md:hidden">by our customers!</h3>
                <span class="text-[#646E73] pt-2 text-base">
                    Customers from across the globe have had fantastic<br class="max-md:hidden"> experiences using Ridelux.
                </span>
                <span class="text-[#646E73]  text-base">
                    Here’s what they have to say.
                </span>
            </div>
            
            <div class="text-black flex gap-[50px]  relative overlayDiv max-md:hidden ">
               
                <swiper
                    :modules="[SwiperAutoplay,SwiperMousewheel,SwiperPagination]"
                    :direction="'vertical'"
                    :slidesPerView="2.5"
                    :spaceBetween="10"
                    :loop="true"
                    :mousewheel="true"
                    :speed="2000"
                    :autoplay="{
                        delay: 0,
                        disableOnInteraction: false,
                    }"
                   
                    class="mySwiper1 w-[300px]"
                >
                    <swiper-slide v-for="slide in reviewsArray1" class="border p-2 rounded-md bg-white">
                        <div>
                            <img src="#" alt="User" /> <span class="text-[20px] text-[1E1E1E]">{{ slide.name }}</span>
                        </div>
                        <div>
                            <div class="flex">
                                <icons-star :star-count="slide.stars" />
                            </div>
                            <span class="text-[#646E73] text-base">
                                {{ slide.comment }}
                            </span>
                        </div>
                        
                    </swiper-slide>
                    
                </swiper>

                <swiper
                    :modules="[SwiperAutoplay,SwiperMousewheel,SwiperPagination]"
                    :direction="'vertical'"
                    :slidesPerView="2.5" 
                    :spaceBetween="10"
                    :loop="true"
                    :speed="2000"
                    :mousewheel="true"
                    :autoplay="{
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: true,
                    }"
                    class="mySwiper2 w-[300px]"
                >
                    <swiper-slide v-for="slide in reviewsArray2" class="border p-2 rounded-md bg-white ">
                        <div>
                            <img src="#" alt="User" /> <span class="text-[20px] text-[1E1E1E]">{{ slide.name }}</span>
                        </div>
                        <div>
                            <div class="flex">
                                <icons-star :star-count="slide.stars" />
                            </div>
                            <span class="text-[#646E73] text-base">
                                {{ slide.comment }}
                            </span>
                        </div>
                        
                    </swiper-slide>
                    
                </swiper>
               
                
            </div>
            <div class="md:hidden">
                <swiper
                    :modules="[SwiperAutoplay,SwiperMousewheel,SwiperPagination]"
                    :direction="'horizontal'"
                    :slidesPerView="1"
                    :spaceBetween="10"
                    :loop="true"
                    :mousewheel="true"
                    :speed="2000"
                    :autoplay="{
                        delay: 0,
                        disableOnInteraction: false,
                    }"
                   
                    class="mySwiper1 w-[350px]"
                >
                    <swiper-slide v-for="slide in reviewsArray1" class="border p-2 rounded-md bg-white">
                        <div>
                            <img src="#" alt="User" /> <span class="text-[20px] text-[1E1E1E]">{{ slide.name }}</span>
                        </div>
                        <div>
                            <div class="flex">
                                <icons-star :star-count="slide.stars" />
                            </div>
                            <span class="text-[#646E73] text-base">
                                {{ slide.comment }}
                            </span>
                        </div>
                        
                    </swiper-slide>
                    
                </swiper>

                <swiper
                    :modules="[SwiperAutoplay,SwiperMousewheel,SwiperPagination]"
                    :direction="'horizontal'"
                    :slidesPerView="1" 
                    :spaceBetween="10"
                    :loop="true"
                    :speed="2000"
                    :mousewheel="true"
                    :autoplay="{
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: true,
                    }"
                    class="mySwiper2 w-[350px]"
                >
                    <swiper-slide v-for="slide in reviewsArray2" class="border p-2 rounded-md bg-white ">
                        <div>
                            <img src="#" alt="User" /> <span class="text-[20px] text-[1E1E1E]">{{ slide.name }}</span>
                        </div>
                        <div>
                            <div class="flex">
                                <icons-star :star-count="slide.stars" />
                            </div>
                            <span class="text-[#646E73] text-base">
                                {{ slide.comment }}
                            </span>
                        </div>
                        
                    </swiper-slide>
                    
                </swiper>
            </div>
        </div>
    </UContainer>

    </div>
   
</template>
<script setup lang="ts">


function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomReview() {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Hank', 'Ivy', 'Jack', 'Kathy', 'Leo', 'Mona', 'Nina', 'Oscar', 'Pam', 'Quinn', 'Ray', 'Sara', 'Tom'];
  const occupations = ['Software Engineer', 'Teacher', 'Doctor', 'Artist', 'Musician', 'Chef', 'Architect', 'Designer', 'Photographer', 'Writer'];
  const comments = [
    "Absolutely loved the service! It was beyond my expectations and I can't wait to come back. The staff was friendly and the atmosphere was perfect. Highly recommend to anyone looking for quality and excellent service.",
    "Not satisfied with the service. There were delays and the staff seemed disinterested. The product quality was also below par. Would not recommend based on my experience. Hopefully, they'll improve in the future.",
    "A decent experience overall. The service was okay, and the product quality was average. There is room for improvement but it's not the worst I've experienced. Might give it another try someday.",
    "Amazing experience! Everything was top-notch from start to finish. The staff was attentive, and the quality was excellent. Definitely coming back and bringing friends along. Kudos to the team for a job well done.",
    "Service was quite satisfactory. The staff was helpful, and the quality met my expectations. No major complaints, but also nothing extraordinary. A good place for a standard experience.",
    "Terrible service. Had to wait a long time, and the staff was rude. The product was also defective. This was a waste of money and time. Will never return and do not recommend it to anyone.",
    "Great service and quality. The staff was professional and courteous. Everything was delivered on time and in perfect condition. Will definitely recommend to others and return in the future.",
    "Mediocre experience. The service was slow, and the staff was not very helpful. The product was okay, but I expected more for the price I paid. Might consider other options next time.",
    "Fantastic service! The staff went above and beyond to ensure I was satisfied. The quality was exceptional and everything was delivered promptly. Will definitely come back for more.",
    "The experience was alright. The service was average and the product was decent. There were a few hiccups, but nothing major. It's a place I might consider if there are no better options available."
  ];

  return {
    id: getRandomInt(1, 1000),
    avatar: '',
    name: names[getRandomInt(0, names.length - 1)],
    occupation: occupations[getRandomInt(0, occupations.length - 1)],
    stars: getRandomInt(1, 5),
    comment: comments[getRandomInt(0, comments.length - 1)]
  };
}

function generateReviewsArray() {
  return Array.from({ length: 20 }, () => generateRandomReview());
}

const reviewsArray1 = ref(generateReviewsArray());
const reviewsArray2 = ref(generateReviewsArray());


</script>
<style lang="css" scoped>

.mySwiper1 {
    transition-timing-function: ease-in-out;
}
.mySwiper2 {
    transition-timing-function: ease-in-out;
}
.overlayDiv::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100px;
    z-index: 1;
    -webkit-transform: skewY(-5deg) translateY(-35px);
    -moz-transform: skewY(-5deg) translateY(-35px);
    -ms-transform: skewY(-5deg) translateY(-35px);
    transform: skewY(-5deg) translateY(-35px);
    background: linear-gradient(0deg, rgba(245,245,245,0) 0%, rgba(245,245,245,1) 50%, rgba(245,245,245,1) 100%);
}
</style>