<template>
  <div class="vl-parent">
    <loading v-model:active="isLoading" :can-cancel="true" :is-full-page="fullPage" />
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import { loadingStore } from '@/stores/loading'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  components: {
    Loading
  },
  setup() {
    const loading = loadingStore()
    loading.doAjax()
    const isLoading = computed(() => loading.isLoading)
    const fullPage = computed(() => loading.fullPage)

    return {
      isLoading,
      fullPage
    }
  }
})
</script>
