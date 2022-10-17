import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'// 引入样式
import './style/index.less'// 引入初始化样式
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.resarch.itcast.cn/mp/v1.0'
Vue.prototype.$axios = axios // 给所有vue对象的原型属性赋值 那么所有vue实例自动拥有$axios
Vue.config.productionTip = false
Vue.use(ElementUI)// 全局注册

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
