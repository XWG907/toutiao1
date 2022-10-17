import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home'
import Login from '../views/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // spa首次加载慢 按需加载
  //   // 点击导航跳转到about的时候 才会去加载about 而且只执行一次
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})
const x = 1
if (x === 1) { console.log() }
export default router
