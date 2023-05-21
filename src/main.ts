import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bridge from '@vkontakte/vk-bridge'
import '@/assets/scss/global.scss'

bridge.send('VKWebAppInit')

createApp(App).use(store).use(router).mount('#app')
