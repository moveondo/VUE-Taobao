import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/components/index'
import deliver from '@/components/deliver'
import cart from '@/components/cart'
import myaccount from '@/components/myaccount'
import more from '@/components/more'


Vue.use(VueRouter)
//
// const appRoutes = [
//   { path: "/",component: index},
//   // { path: "/search",component: Search},
//   { path: "/deliver",component: deliver},
//   { path: "/cart",component: cart},
//   { path: "/myaccount",component: myaccount},
//   { path: "/more",component: more}
// ]
// const router = new VueRouter({
//   routes: appRoutes
// })
//
// export default {
//   router: router
// }


export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/deliver',
      name: 'deliver',
      component: deliver
    },
    {
      path: '/myaccount',
      name: 'myaccount',
      component: myaccount
    },
    {
      path: '/more',
      name: 'more',
      component: more
    }
  ]
})
