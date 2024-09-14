import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
// 引入ElemantUI组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
