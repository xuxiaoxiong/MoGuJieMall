<template>
  <div class="goods-info" v-if="Object.keys(goodsInfo).length != 0">
    <div class="top clear-fix">
      <div class="left"></div>
      <div class="content">{{goodsInfo.desc}}</div>
      <div class="right"></div>
    </div>
    <div class="detail-image">
      <div class="detail-image-title">
              {{goodsInfo.detailImage[0].key}}

      </div>
      <div class="detail-image-content" v-for="item in goodsInfo.detailImage[0].list"><img :src="item" alt="" @load="imgLoad"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailGoodsInfo",
        props: {
            goodsInfo: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
    methods:{
        imgLoad(){
            this.$emit("imgLoad");
        }
    },
    }
</script>

<style scoped lang="scss">
  @import "~assets/css/base.css";

  .goods-info {
    .top {
      padding: 20px 14px 0;
      background-color: #fff;

      .left, .right {
        position: relative;
        width: 80px;
        height: 2px;
        background-color: #666666;
      }

      .right {
        float: right;
      }

      .left::before, .right::after {
        content: "";
        position: absolute;
        width: 4px;
        height: 4px;
        background-color: #000000;
      }

      .left::before {
        left: 0;
        top: -1px;
      }

      .right::after {
        right: 0;
        top: -1px;
      }

      .content {
        padding: 8px 0;
        height: 40px;
        font-size: 12px;
        text-align: left;
      }
    }
    .detail-image{
      .detail-image-title{
        height: 24px;
        padding-left: 14px;
        line-height: 24px;
        font-size: 14px;
      }
      .detail-image-content img{
        width: 100%;
      }
    }
  }
</style>
