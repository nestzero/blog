import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home=()=>import('@/views/Home')

const routes = [
  {
    path: '',
    redirect: 'Home'
  },
  {
    path: '/Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
