import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import About from '@/components/About'
import Projects from '@/components/Projects'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '*',
      compoent: NotFound
    }
  ]
})
