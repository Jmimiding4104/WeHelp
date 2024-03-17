<template>
  <div class="resume" style="background-color: #A3D1D1">
    <div class="container py-5">
      <h2 class="text-center fs-1 fw-bold mb-5">RESUME</h2>
      <div class="mw-80p">
        <div class="p-5 border-resume" style="background-color: #D1E9E9">
          <h3 class=" fs-1 fw-bold">EXPERIENCE</h3>
          <ResumeSwiper :title="experience" />
        </div>
        <div class="mt-5 p-5 border-resume" style="background-color: #d1e9e9">
          <h3 class="fw-bold fs-1">EDUCATION</h3>
          <ResumeSwiper :title="education" />
        </div>
        <div class="mt-5 p-5 border-resume" style="background-color: #d1e9e9">
          <h3 class="fw-bold fs-1">Languages</h3>
          <ul class="list-unstyled row">
            <ProgressLine title="中文" stage="精通" :range="90" />
            <ProgressLine title="英語" stage="多益560分" :range="40" />
            <ProgressLine title="台語" stage="可聽" :range="20" />
            <ProgressLine title="客語" stage="可聽略說" :range="30" />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'

import ProgressLine from '@/components/ProgressLine.vue'
import ResumeSwiper from '@/components/ResumeSwiper.vue'

export default {
  components: {
    ProgressLine,
    ResumeSwiper
  },
  setup() {
    let experience = ref({})
    let education = ref({})
    const swiper = ref(null)
    onMounted(() => {
      axios.get('https://myblogapi-v3b7.onrender.com/experience').then((res) => {
        experience.value = res.data
      })
      axios.get('https://myblogapi-v3b7.onrender.com/education').then((res) => {
        education.value = res.data
      })
    })
    return {
      experience,
      education,
      swiper
    }
  }
}
</script>

<style>
.resume{
  .card {
    box-shadow: -5px 10px 10px gray;
  }
}
.border-resume {
  border: 0.5rem #6fb7b7 solid;
}
</style>
