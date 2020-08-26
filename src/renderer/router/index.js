import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'basement',
      component: require('@/components/Basement').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
