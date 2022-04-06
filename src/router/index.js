import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SuitView from '../views/SuitView.vue'
import ShirtView from '../views/ShirtView.vue'
import TrouserView from '../views/TrouserView.vue'
import AccessoriesView from '../views/AccessoriesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/suits',
    name: 'suits',
    component: SuitView
  },
  {
    path: '/shirts',
    name: 'shirts',
    component: ShirtView
  },
  {
    path: '/trousers',
    name: 'trousers',
    component: TrouserView
  },
  {
    path: '/accessories',
    name: 'accessories',
    component: AccessoriesView
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
