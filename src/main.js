

import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import router from './router'

import Home from './pages/Home.vue'

import 'ant-design-vue/dist/reset.css'
import './style.css'


const app = createApp(Home)

app.use(router)
app.use(Antd)
app.mount('#app')
