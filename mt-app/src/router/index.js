import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Goods from'@/components/goods/Goods'
import Ratings from'@/components/ratings/Ratings'
import Seller from'@/components/seller/Seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/goods"
    },
    {
      path: '/goods',
      component: Goods
    },{
      path: '/ratings',
      component: Ratings
    },{
      path: '/seller',
      component: Seller
    }
  ],
  linkActiveClass:"active"
})
