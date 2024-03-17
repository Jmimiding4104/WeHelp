<template>
  <swiper
    v-if="title.length > 0"
    :slidesPerView="1"
    :spaceBetween="30"
    :pagination="{
      clickable: true
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
    :loop="true"
    ref="swiper"
  >
    <swiper-slide v-for="item in title" :key="item.description" style="background-color: #d1e9e9"
      ><div class="p-5">
        <div class="card mb-3 fs-3" style="max-width: 700px">
          <div class="row g-0">
            <div class="col-md-4 p-3 d-flex flex-column justify-content-center">
              <p>
                {{ item.begin }} - <span v-if="item.finish">{{ item.finish }}</span
                ><span v-else-if="item.finish == null">Present</span>
              </p>
              <h4><span v-if="item.postion">{{ item.postion }}</span><span v-else>{{ item.name }}</span></h4>
              <p><span v-if="item.company">{{ item.company }}</span><span v-else-if="item.major">{{ item.major }}</span><span v-else>{{ item.degree }}</span></p>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="m-0">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div></swiper-slide
    >
  </swiper>
  <div v-else class="d-flex justify-content-center">
    <div class="spinner-border text-danger" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <p class="mb-0 mx-2 d-flex align-items-center">{{ data }}</p>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import { onMounted, ref } from 'vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: ['title'],
  setup() {
    const swiper = ref(null)
    const data = ref(null)


    onMounted(() => {
      setTimeout(() => {
        data.value = 'RENDER 尚在熱機，請稍等~'
      }, 1000)
    })

    return {
      modules: [Pagination, Navigation],
      swiper,
      data
    }
  }
}
</script>

<style>
html,
body {
  position: relative;
  height: 100%;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-wrapper{
  align-items: center;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #007aff;
}
</style>