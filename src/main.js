

import { createApp } from 'vue'
import Antd from 'ant-design-vue'

import Home from './pages/Home.vue'

import 'ant-design-vue/dist/reset.css'
import './style.css'


const app = createApp(Home)


app.use(Antd)
app.mount('#app')
