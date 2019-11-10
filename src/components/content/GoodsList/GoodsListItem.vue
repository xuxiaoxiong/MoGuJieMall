<template>
  <div class="home_goods_show_item" @click="itemClick">

    <!-- v-lazy 不会自动提示，并且显示可能异样   -->
    <img v-lazy="showImg" alt="" @load="imgLoadCom">
    <div class="title">
      <p>{{good.title}}</p>
      <span class="price">{{good.price}}</span> <span class="cfav">{{good.cfav}}</span>
    </div>

  </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props: {
            good: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            imgLoadCom() {
                this.$bus.$emit("itemImgLoad");
            },
            itemClick() {
                this.$router.push("/detail/" + this.good.iid)
            }
        },
        computed: {
            showImg(){
                // 为什么顺序那么重要

                return this.good.image  || this.good.show.img
            }
        },
    }
</script>

<style scoped lang="scss">
  .home_goods_show_item {
    position: relative;
    flex: 47%;
    padding: 5px;
    padding-bottom: 40px;

    img {
      width: 100%;
      border-radius: 3px;
    }

    div.title {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      font-size: 12px;
      text-align: center;
      overflow: hidden;

      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .price {
        color: red;
      }

      .cfav {
        position: relative;
        padding-left: 18px;
      }

      .cfav::before {
        position: absolute;
        left: 0px;
        top: -1px;
        content: "";
        line-height: 100%;
        width: 14px;
        height: 14px;
        background: url("~assets/imgs/common/collect.svg") 0 0/14px 14px;
      }

    }
  }
</style>
