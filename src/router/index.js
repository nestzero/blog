import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home=()=>import('@/views/home/home')
const content=()=>import('@/views/content/content')

const author=()=>import('@/views/author/author')
const author_essay_list=()=>import('@/components/content/author/childComponents/AuthorEssayList');
const author_stars_list=()=>import('@/components/content/author/childComponents/AuthorStarsList');
const author_comments_list=()=>import('@/components/content/author/childComponents/AuthorCommentsList')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home,
  },
  {
    path: '/essay',
    component: content
  },
  {
    path:'/author',
    component:author,
    redirect:'/author_essay_list',
    children:[
      {path:'/author_essay_list',component:author_essay_list},
      {path:'/author_stars_list',component:author_stars_list},
      {path:'/author_comments_list',component:author_comments_list}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
