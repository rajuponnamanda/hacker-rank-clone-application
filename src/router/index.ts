import LoginPage from '@/components/LoginPage.vue'
import StickyNavbar from '@/components/StickyNavbar.vue'
import ContactUs from '@/components/ContactUs.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/',
      component: StickyNavbar
    },
    {
      path: '/contactUs',
      component: ContactUs
    }
  ]
})

export default router
