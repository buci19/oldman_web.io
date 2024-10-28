import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
// 引入ElemantUI组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { getToken } from '@/utils/jwtUtils';
// import pluginState from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia';

/* eslint-disable */
// 全局设置退出浏览器自动清理localstore
window.addEventListener('beforeunload', function (event) {
  localStorage.clear();
})

// 全局设置cookie
Vue.prototype.$setCookie = function (name, value, seconds) {
  seconds = seconds || 0;
  var expires = "";
  if (seconds != 0) {
    var date = new Date();
    date.setTime(date.getTime() + (seconds * 1000));
    expires = "; expires=" + date.toGMTString();
  }
  document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/"; // 使用encodeURIComponent代替escape
};


// 创建 Pinia 实例
const pinia = createPinia();
Vue.use(pinia);

// 创建并挂载 Vue 实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// 让请求携带上浏览器的cookie
axios.defaults.withCredentials = true;

// 设置请求拦截器
axios.interceptors.request.use(
  config => {
    // 从localStorage或其他地方获取JWT Token
    const token = localStorage.getItem(getToken);
    console.log(token);

    if (token) {
      // 如果Token存在，添加到请求头
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // 请求错误处理
    return Promise.reject(error);
  }
);

// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);

// 创建 axios 实例
const instance = axios.create({
  baseURL: 'http://localhost:5081/api/oldman',
  // 其他配置...
});

export default instance;