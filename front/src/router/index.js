import Vue from 'vue'
import VueRouter from 'vue-router'
import GameZone from '../views/GameZone.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'gameZone',
    component: GameZone
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
