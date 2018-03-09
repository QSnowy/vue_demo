<template>
  <div class="container">
    <h1>THis is one page</h1>
    <p>离离原上草，一岁一枯荣，野火烧不尽，春风吹又生</p>
    <button @click="sendReq">发送一个请求</button>
  </div>

</template>

<script>
  import axios from 'axios'

  export default {
    name: "one",
    methods: {
      sendReq: function () {
        axios.get('https://www.baidu.com').then(
          function (response) {
            console.log(response);
          }
        ).catch(
          function (error) {
            console.log(error);
          }
        );
        console.log('发送一个请求')
      }
    }
  }
</script>

<style scoped>
  .container {

  }
</style>
