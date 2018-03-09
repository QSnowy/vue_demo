<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--使用com组件，跟普通的HTML标签对一样的用法-->
    <com></com>
    <!--添加路由连接-->
    <router-link to="/one" style="margin-right: 80px">go to one page</router-link>
    <router-link to="/two">go to two page</router-link>
    <!--路由匹配到文件直接渲染在本页面-->
    <router-view></router-view>
  </div>
</template>

<script>
  // <!--导入组件-->
  import com from './components/com.vue'

  export default {
    name: 'app',
    // 声明 app 所用到的组件
    components: {
      com
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  a {
    color: #42b983;
  }
</style>
