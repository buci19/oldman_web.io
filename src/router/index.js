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
    path: '/oldman/Healthyguide',
    name: 'Healthyguide',
    component: () => import('../views/oldman/HealthyguideView.vue')
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
    path: '/oldman/userCenter',
    name: 'userCenter',
    component: () => import('../views/oldman/UserCenterView.vue')
  },
  {
    path: '/oldman/HguideHypertension',
    name: 'HguideHypertension',
    component: () => import('../views/oldman/HguideHypertensionView.vue')
  },
  {
    path: '/oldman/HguideHyperglycemia',
    name: 'HguideHyperglycemia',
    component: () => import('../views/oldman/HguideHyperglycemiaView.vue')
  },
  {
    path: '/oldman/HguideHyperlipidemia',
    name: 'HguideHyperlipidemia',
    component: () => import('../views/oldman/HguideHyperlipidemiaView.vue')
  },
  {
    path: '/oldman/HguideStrength',
    name: 'HguideStrength',
    component: () => import('../views/oldman/HguideStrengthView.vue')
  }


]

const router = new VueRouter({
  routes
})

export default router
