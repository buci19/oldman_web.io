import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/oldman/index'
  },
  {
    path: '/oldman/index',
    name: 'index',
    component: () => import('../views/oldman/IndexView.vue')
  },
  {
    path: '/Oldman/Aianswer',
    name: 'Aianswer',
    component: () => import('../views/oldman/AianswerView.vue')
  },
  {
    path: '/oldman/Healthysport',
    name: 'Healthysport',
    component: () => import('../views/oldman/HealthysportView.vue')
  },
  {
    path: '/oldman/Memoirs',
    name: 'Memoirs',
    component: () => import('../views/oldman/MemoirsView.vue')
  },
  {
    path: '/oldman/Login',
    name: 'Login',
    component: () => import('../views/oldman/LoginView.vue')
  },
  {
    path: '/oldman/Register',
    name: 'Register',
    component: () => import('../views/oldman/RegisterView.vue')
  },
  {
    path: '/oldman/HknowRest',
    name: 'HknowRest',
    component: () => import('../views/oldman/HknowRestView.vue')
  },
  {
    path: '/oldman/HknowSportInstruction',
    name: 'HknowSportInstruction',
    component: () => import('../views/oldman/HknowSportInstructionView.vue')
  },
  {
    path: '/oldman/HknowDiseasePrevention',
    name: 'HknowDiseasePrevention',
    component: () => import('../views/oldman/HknowDiseasePreventionView.vue')
  },
  {
    path: '/oldman/HknowHealthyEat',
    name: 'HknowHealthyEat',
    component: () => import('../views/oldman/HknowHealthyEatView.vue')
  },
  {
    path: '/oldman/HknowMentalHealthy',
    name: 'HknowMentalHealthy',
    component: () => import('../views/oldman/HknowMentalHealthyView.vue')
  },
  {
    path: '/oldman/HknowHabits',
    name: 'HknowHabits',
    component: () => import('../views/oldman/HknowHabitsView.vue'),
  },
  {
    path: '/oldman/Hknowledge',
    name: 'Hknowledge',
    component: () => import('../views/oldman/HknowledgeView.vue'),
  },
  {
    path: '/Oldman/userCenter',
    name: 'userCenter',
    component: () => import('../views/oldman/UserCenterView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
