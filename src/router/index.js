import {createRouter, createWebHistory} from 'vue-router'

import Content from '../pages/Content.vue'
import Content2 from '../pages/Content2.vue'

const routes =  [
  { path: '/', name: 'Content', component: Content},
  {path: '/page1', name: 'Page1', component: Content2}
]


const router = createRouter ({
  history: createWebHistory(),
  routes,
})

export default router