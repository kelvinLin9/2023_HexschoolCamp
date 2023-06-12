import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

// importing AOS css style globally
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
const pinia = createPinia()

app.use(VueAxios, axios)
app.use(AOS)
app.use(pinia)
app.use(router)
app.mount('#app')
