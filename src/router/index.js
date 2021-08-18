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
  },
  {
    path: '/db',
    name: 'db',
    component: () => import('../components/indexedDB.vue')
  },
  {
    path: '/easytable',
    name: 'easytable',
    component: () => import('../components/vue-easytable.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router