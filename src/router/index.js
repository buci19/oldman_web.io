import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/oldman/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/oldman/RegisterView.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/oldman/IndexView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
