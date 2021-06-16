import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Feed from '../components/Feed.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/login"
  },
  {
    path: '/login',
    name: 'Sign In',
    component: Login
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed
  }
]

export const router = new VueRouter({
  routes
})

export default router
