<template>
  <div class="vl-parent">
    <loading v-model:active="isLoading" :can-cancel="true" :is-full-page="fullPage" />
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import { loadingStore } from '@/stores/loading'
import { defineComponent } from 'vue'

import { computed } from 'vue'

export default defineComponent({
  components: {
    Loading
  },
  setup() {
    const loading = loadingStore() // 正确在 setup 中获取 store 实例

    // 直接在 setup 中使用 store 的 state 和 actions
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
