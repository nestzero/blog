import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home=()=>import('@/views/home/home')
const content=()=>import('@/views/content/content')


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/content',
    component: content
  }
]

const router = new VueRouter({
  routes
})

export default router
