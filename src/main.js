import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/less/index.less'
import './api/mock.js'
import api from './api/api.js'


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
};

app.config.globalProperties.$api = api

app.use(router).use(store)
app.mount('#app')
