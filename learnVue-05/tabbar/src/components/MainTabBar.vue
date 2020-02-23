<template>
  <tab-bar>
      <tab-bar-item path="/home"><!-- 如果对文字颜色不满意，可以使用activeColor属性修改，例如添加 activeColor="blue" -->
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="首页">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="分类">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="购物车">
        <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="我的">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>

  import TabBar from 'components/tabbar/TabBar'

  import TabBarItem from 'components/tabbar/TarBarItem'

export default {
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  
  .tab-bar-item {
    flex: 1;
    text-align: center;
    margin-top: 3px
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>