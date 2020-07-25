import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../components/Welcome.vue'
import Chat from '../components/Chat.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    props: true, // <<<< this means that the route is expecting to be passed a prop
    beforeEnter: (to, from, next) => {
      if(to.params.name){
        next()
      } else {
        next({name: 'Welcome', params: {fromRouter: 'Please select a name and enter chat from the welcome page'}})
      }
      
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
