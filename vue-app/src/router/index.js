import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [

  // {
  // path: '/about',
  // name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import( '../views/About.vue')
  // },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/weather',
    name: 'Weather',
    component: () => import('../views/Weather.vue')
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('../views/Music.vue')
  }

]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

export default router