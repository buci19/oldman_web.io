<template>
  <div id="app">
    <!-- 路由配置 -->
    <router-view></router-view>
  </div>
</template>

<style>
  *{
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
  }
</style>


<script>
export default {
  components: {},
  data() {
    return {
      message: "hellos vue2"
    }
  }
}
</script>
