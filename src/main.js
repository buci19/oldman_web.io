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

// 创建 axios 实例
const instance = axios.create({
  baseURL: 'http://localhost:5081/api/oldman',
  // 其他配置...
});

// 添加全局响应拦截器
instance.interceptors.response.use(response => {
  console.log(response)
  // 对响应数据做点什么
  return response;
}, error => {
  // 对响应错误做点什么
  if (error.response && error.response.data === 'NOT_LOGIN') {
    // 清除旧的token或用户信息
    // localStorage.removeItem('userToken');
    // 跳转到登录页面
    instance.$router.replace({ path: '/oldman/Login' });
  }
  return Promise.reject(error);
});

export default instance;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
