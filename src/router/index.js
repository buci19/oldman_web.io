import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/oldman/index'
  },
  {
    // 首页
    path: '/oldman/index',
    name: 'index',
    component: () => import('../views/oldman/IndexView.vue')
  },
  {
    // AI页
    path: '/Oldman/Aianswer',
    name: 'Aianswer',
    component: () => import('../views/oldman/AianswerView.vue')
  },
  {
    // 健康知识库
    path: '/oldman/Hknowledge',
    name: 'Hknowledge',
    component: () => import('../views/oldman/HknowledgeView.vue'),
  },
  {
    // 健康指导
    path: '/oldman/Healthyguide',
    name: 'Healthyguide',
    component: () => import('../views/oldman/HealthyguideView.vue')
  },
  {
    // 登录
    path: '/oldman/Login',
    name: 'Login',
    component: () => import('../views/oldman/LoginView.vue')
  },
  {
    // 注册
    path: '/oldman/Register',
    name: 'Register',
    component: () => import('../views/oldman/RegisterView.vue')
  },
  {
    // 健康知识库-作息指南
    path: '/oldman/HknowRest',
    name: 'HknowRest',
    component: () => import('../views/oldman/HknowRestView.vue')
  },
  {
    // 健康知识库-生活习惯
    path: '/oldman/HknowHabits',
    name: 'HknowHabits',
    component: () => import('../views/oldman/HknowHabitsView.vue'),
  },
  {
    // 健康知识库-营养饮食
    path: '/oldman/HknowHealthyEat',
    name: 'HknowHealthyEat',
    component: () => import('../views/oldman/HknowHealthyEatView.vue')
  },
  {
    // 健康知识库-运动指导
    path: '/oldman/HknowSportInstruction',
    name: 'HknowSportInstruction',
    component: () => import('../views/oldman/HknowSportInstructionView.vue')
  },
  {
    // 健康知识库-心理健康
    path: '/oldman/HknowMentalHealthy',
    name: 'HknowMentalHealthy',
    component: () => import('../views/oldman/HknowMentalHealthyView.vue')
  },
  {
    // 健康知识库-疾病预防
    path: '/oldman/HknowDiseasePrevention',
    name: 'HknowDiseasePrevention',
    component: () => import('../views/oldman/HknowDiseasePreventionView.vue')
  },
  {
    // 健康知识库-作息指南
    path: '/oldman/HknowRest',
    name: 'HknowRest',
    component: () => import('../views/oldman/HknowRestView.vue')
  },
  {
    // 个人中心
    path: '/oldman/userCenter',
    name: 'userCenter',
    component: () => import('../views/oldman/UserCenterView.vue')
  },
  {
    // 健康指导-高血压
    path: '/oldman/HguideHypertension',
    name: 'HguideHypertension',
    component: () => import('../views/oldman/HguideHypertensionView.vue')
  },
  {
    // 健康指导-高血糖
    path: '/oldman/HguideHyperglycemia',
    name: 'HguideHyperglycemia',
    component: () => import('../views/oldman/HguideHyperglycemiaView.vue')
  },
  {
    // 健康指导-慢性支气管炎
    path: '/oldman/HguideBronchitis',
    name: 'HguideBronchitis',
    component: () => import('../views/oldman/HguideBronchitisView.vue')
  },
  {
    // 健康指导-慢跑
    path: '/oldman/HguideJogging',
    name: 'HguideJogging',
    component: () => import('../views/oldman/HguideJoggingView.vue')
  },
  {
    // 健康指导-游泳
    path: '/oldman/HguideSwim',
    name: 'HguideSwim',
    component: () => import('../views/oldman/HguideSwimView.vue')
  },
  {
    // 健康指导-八段锦
    path: '/oldman/HguideBaduanjin',
    name: 'HguideBaduanjin',
    component: () => import('../views/oldman/HguideBaduanjinView.vue')
  },
  {
    // 健康指导-健身操
    path: '/oldman/HguideAerobics',
    name: 'HguideAerobics',
    component: () => import('../views/oldman/HguideAerobicsView.vue')
  },
  {
    // 健康指导-太极拳
    path: '/oldman/HguideTaichi',
    name: 'HguideTaichi',
    component: () => import('../views/oldman/HguideTaichiView.vue')
  },
  {
    // 健康指导-柔力球
    path: '/oldman/HguideSoftball',
    name: 'HguideSoftball',
    component: () => import('../views/oldman/HguideSoftballView.vue')
  }


]

const router = new VueRouter({
  routes
})

export default router
