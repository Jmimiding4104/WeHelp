<script>
import NavbarView from '@/components/NavbarComponent.vue'
import FooterView from '@/components/FooterComponent.vue'

export default {
  data() {
    return {}
  },
  components: {
    NavbarView,
    FooterView
  },
  mounted() {
    this.$http.get('https://myblogapi-v3b7.onrender.com')
  }
}

</script>

<template>
  <NavbarView />
  <router-view  />
  <FooterView />
</template>

<style>
</style>
