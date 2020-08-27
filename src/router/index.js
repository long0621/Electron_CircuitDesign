import Vue from 'vue'
import VueRouter from 'vue-router'
import basement from '../views/basement.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'basement',
    component: basement,
    children:[
      {
        path: '/LLC',
        name: 'LLC',
        component: () => import('../components/topology/LLC.vue')
      }
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
