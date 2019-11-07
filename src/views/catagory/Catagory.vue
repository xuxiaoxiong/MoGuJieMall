<template>
  <div class="wrapper">
    <ul class="content">
      <button @click="show">hahaha </button>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>

      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
      <li>哈哈哈</li>
    </ul>
  </div>
</template>

<script>
    import BScroll from "better-scroll"

    export default {
        name: "Catagory",
        data() {
            return {
                scroll: null,
            }
        },
        components: {
            BScroll
        },
        methods: {
            show(){
                alert(11);
            }
        },
        created() {

        },
        //注意scroll应该写在这。注意生命周期
        mounted() {

            // 注意这里的wrapper。
            this.scroll = new BScroll(document.querySelector(".wrapper"), {
                probeType: 3,
                pullUpLoad: true
            });
            this.scroll.on("scroll", (position) => {
                console.log(position);
            });
            this.scroll.on("pullingUp", () => {
                console.log("上拉加载更多");
            });
        },

    }
</script>

<style scoped lang="scss">
  .wrapper {
    height: 300px;
    background-color: red;
    overflow: hidden;
  }
</style>
