import { defineStore } from 'pinia';

export const loadingStore = defineStore('loading', {

  state: () => ({
    isLoading: false,
    fullPage: true
  }),
  actions: {
    doAjax() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 700)
    }
  },
});
