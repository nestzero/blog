import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home=()=>import('@/views/home/home')
const content=()=>import('@/views/content/content')

const author=()=>import('@/views/author/author')
const author_list=()=>import('@/views/author/childComponents/AuthorEssayList');

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
    path: '/essay',
    component: content
  },
  {
    path:'/author',
    component:author
    child
  }
]

const router = new VueRouter({
  routes
})

export default router
