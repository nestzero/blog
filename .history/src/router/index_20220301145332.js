import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home=()=>import('@/views/Home')

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: Home
  },
  {
    path: '/Home',
    com
  }
]

const router = new VueRouter({
  routes
})

export default router
