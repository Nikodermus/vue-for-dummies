import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user/:id',
      component: Home
    },
    // BUG: Vue-router uses the FIRST path from the routes array that matches.
    // If we try to go to /user/about, the route above will match, and this one will
    // never be used.  The fix is to swap the 2 entries so that the route for /user/about
    // comes first.
    {
      path: '/user/about',
      component: About
    }
  ]
})
