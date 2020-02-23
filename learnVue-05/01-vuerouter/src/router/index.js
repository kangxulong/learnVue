// 配置路由信息
import VueRouter from 'vue-router'
import Vue from 'vue'
import Router from 'vue-router'
// // @ts-ignore
// import Home from '../components/Home.vue'
// // @ts-ignore
// import About from '../components/About.vue'
// // @ts-ignore
// import User from '../components/User.vue'

const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')

const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const Profile = () => import('../components/Profile.vue')

// 1.通过Vue.use(插件)，安装插件

Vue.use(VueRouter)

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

// 2.创建VueRouter对象
const routes = [
  {
    path:'',
    // redirect：重定向
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home, //是component不是components！！！！！
    children:[
      {
        path:'',
        redirect:'news'
      },
      {
        path:'news',
        component:HomeNews
      },
      {
        path:'message',
        component:HomeMessage
      }
    ],
    meta:{
      title:'首页'
    }
  },
  {
    path:'/about',
    component:About,
    meta:{
      title:'关于'
    }
  },
  {
    path:'/user/:userid',
    component:User,
    meta:{
      title:'用户'
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      title:'我的'
    }
  }
]

const router = new VueRouter({

  //配置路由与组件之间的关系：
  routes,
  mode:'history'
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  // console.log(to);
  
  next()
})

// 3.将router对象传入到Vue实例中
export default router