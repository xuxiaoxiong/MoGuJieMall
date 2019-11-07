<template>
  <nav-bar-item class="detailNav">
    <div class="left" slot="nav_left" @click="back"></div>
    <div slot="nav_center" class="nav_center">
      <div v-for="(item,index) in titles" class="div1"
           @click="itemClick(index)" :class="{active1: currentIndex === index}">{{item}}
      </div>
    </div>
  </nav-bar-item>
</template>

<script>
    import NavBarItem from "components/common/navbar/NavBarItem";

    export default {
        name: "DetailNav",
        components: {
            NavBarItem,
        },
        data() {
            return {
                titles: ['商品', '参数', '评论', '推荐'],
                currentIndex: 0,
            }
        },
        computed: {},
        methods: {
            itemClick(index) {
                this.currentIndex = index;
            },
            back() {
                this.$router.back();
            },
        },
    }
</script>

<style scoped lang="scss">
  .left {
    width: 100%;
    height: 100%;
    background: url("~assets/imgs/common/back.svg") no-repeat center;
  }

  .detailNav {
    position: relative;
    z-index: 20;
    background-color: white;
    font-size: 14px;
  }

  .nav_center {
    display: flex;
    color: #666666;

    .div1 {
      flex: 1;
    }

    .active1 {
      color: red;
    }

  }


</style>
