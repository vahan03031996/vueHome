import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import startSignUp from "../components/auth/startSignUp";
import siteAdmin from "../components/auth/siteAdmin";
import createSite from "../components/auth/createSite";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/start-sign-up',
    name: 'startSignUp',
    component: startSignUp
  },
  {
    path: '/site-admin',
    name: 'siteAdmin',
    component: siteAdmin
  },
  {
    path: '/create-site',
    name: 'createSite',
    component: createSite
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
