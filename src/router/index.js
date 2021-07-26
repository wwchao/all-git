import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'openlayers',
    component: () => import('../components/openlayers.vue')
  },
  {
    path: '/el-com',
    name: 'element-component',
    component: () => import('../components/elementCom.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
console.log(router)
export default router