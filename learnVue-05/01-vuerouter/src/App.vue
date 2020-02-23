<template>
  <div>
    <!-- <router-link to = './home' tag = "button" replace>首页</router-link> tag标签可以改变router-link标签的形态
    <router-link to = './about' tag = "button" replace>关于</router-link>replace属性可以消除history模式，让网页不可以前进后退 -->
    <!-- <button @click = "homeClick()">首页</button>
    <button @click = "aboutClick()">关于</button> -->

    <router-link to = "/home">首页</router-link>
    <router-link to = "/about">关于</router-link>
    <router-link :to = "'/user/' + userId">用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'kxl', age:18, height:1.8}}">我的</router-link>
    <keep-alive exclude="Profile,User">
      <router-view />
    </keep-alive>

    <button @click="userClick">用户</button>
    <button @click="profileClick">我的</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods:{
    homeClick() {
      // this.$router.push("/home"); //$router可以直接用来修改路径
      this.$router.replace('/home'); // 也可以使用replace防止浏览器前进后退 
      console.log('homeClick');
    },
    aboutClick() {
      // this.$router.push("/about");
      this.$router.replace('/about');
      console.log('aboutClick');
    },
    userClick(){
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push(
        {
          path:'/profile',
          query:{
            name: 'kang',
            age: 18,
            hright: 1.86
          }
        }
      )
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active {
  color: #f00;
}
</style>
