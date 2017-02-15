import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

const router = new VueRouter({
  mode: 'hash',
  routes
})

Vue.use(VueRouter)

export default router
