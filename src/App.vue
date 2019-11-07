<template>
    <div id="app">
        <!--    <nav-bar></nav-bar>-->
      <keep-alive exclude="Detail">
        <router-view></router-view>
      </keep-alive>
      <main-tab-bar></main-tab-bar>

    </div>

</template>

<script>
    import router from "./router";
    import MainTabBar from "./components/content/MainTabBar";


    export default {
        name: 'app',
        router,
        components: {
            MainTabBar,
            // NavBar
        }
    }
</script>

<style lang="scss">
  @import "~assets/css/base.css";
  /*页面上边有空白竟然是因为它*/
  /*#app{*/
  /*  padding-top: 44px;*/
  /*}*/
</style>
