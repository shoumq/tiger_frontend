import { createPinia } from 'pinia'
import { createApp } from 'vue'
import './scss/style.scss'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(VueAxios, axios).use(router).use(createPinia()).mount('#app')
