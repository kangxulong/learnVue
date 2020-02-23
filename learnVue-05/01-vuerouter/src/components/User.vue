<template>
  <div>
    <h2>我是用户</h2>
    <p>我是用户信息，哈哈哈哈哈</p>
    <p>{{$route.params.userid}}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  created() {
    console.log('User created');
  },
  destroyed() {
    console.log('User destroy');
  },
  computed: {
    userID() {
      return this.$route.params.userid
    }
  }
}
</script>

<style>

</style>