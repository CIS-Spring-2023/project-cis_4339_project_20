import { createRouter, createWebHistory } from 'vue-router'

// make all paths and names lowercase for consistency
const routes = [
  {
    path: '/',
    props: true,
    component: () => import('../components/homePage.vue')
  },
  {
    path: '/intakeform',
    name: 'intakeform',
    props: true,
    component: () => import('../components/intakeForm.vue')
  },
  {
    path: '/findclient',
    name: 'findclient',
    component: () => import('../components/findClient.vue')
  },
  {
    path: '/updateclient/:id',
    name: 'updateclient',
    props: true,
    component: () => import('../components/updateClient.vue')
  },
  {
    path: '/eventform',
    name: 'eventform',
    component: () => import('../components/eventForm.vue')
  },
  {
    path: '/findevents',
    name: 'findevents',
    component: () => import('../components/findEvents.vue')
  },
  {
    path: '/eventdetails/:id',
    name: 'eventdetails',
    props: true,
    component: () => import('../components/eventDetails.vue')
  },
  {
    path: '/userlogin',
    name: 'userlogin',
    props: true,
    component: () => import('../components/userLogin.vue')
  },
  {
    path: '/addservices',
    name: 'addservices',
    props: true,
    component: () => import('../components/addServices.vue')
  },
  {
    path: '/editservices',
    name: 'editservices',
    props: true,
    component: () => import('../components/editServices.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
