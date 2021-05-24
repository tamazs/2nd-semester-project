import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Groups from '../views/Groups.vue'
import About from '../views/About.vue'
import Gallery from '../views/Gallery.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/groups',
    name: 'Groups',
    
    component: Groups
  },
  {
    path: '/about',
    name: 'About us',
    
    component: About
  },
  {
    path: '/gallery',
    name: 'Gallery',
    
    component: Gallery
  },
  {
    path: '/contact',
    name: 'Contact',
    
    component: Contact
  },
]

const router = new VueRouter({
  routes
})

export default router
