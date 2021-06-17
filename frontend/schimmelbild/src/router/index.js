import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Feed from '../components/Feed.vue'
import Register from '../components/Register.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/login"
  },
  {
    path: '/login',
    name: 'SignIn',
    component: Login
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed
  },
  {
    path: '/Register',
    name: 'Signup',
    component: Register
  },
]

export const router = new VueRouter({
  routes
})

export default router