import Vue from 'vue'
import Router from 'vue-router'
import Contact from '@/components/contacts'
import Session from '@/components/session'
import Official from '@/components/officials'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Session',
      component: Session
    },
    {
      path: '/official',
      name: 'official',
      component: Official
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
