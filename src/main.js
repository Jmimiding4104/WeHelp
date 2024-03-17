import './assets/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
import { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

const pinia = createPinia()
const app = createApp(App)

import { loadingStore } from './stores/loading'

router.afterEach(() => {
	window.scrollTo(0, 0);
	const store = loadingStore(pinia)
	store.doAjax()
});

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(pinia)
app.use(LoadingPlugin, {
	color: '#FF0000'
})

app.mount('#app')