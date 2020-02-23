import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../pages/home/Home.vue')
const Category = () => import('../pages/Category/Category.vue')
const Cart = () => import('../pages/cart/Cart.vue')
const Profile = () => import('../pages/profile/Profile.vue')


Vue.use(Router)

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home //是component!!!!!不是Component!!!!!!
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  }
]

export default new Router({
  routes,
  mode: 'history'
})
