<template>
    <div class="detail_bottombar">
      <div class="left">
        <div class="ll"><div class="icon icon1"></div><span>客服</span></div>
        <div class="ll"><div class="icon icon2"></div><span>客服</span></div>
        <div class="ll"><div class="icon icon3"></div><span>客服</span></div>
      </div>
      <div class="right">
        <div>加入购物车</div>
        <div>购买</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBottomBar"
    }
</script>

<style scoped lang="scss">
  .detail_bottombar{
    position:fixed;
    bottom: 0px;
    left: 0;
    right: 0;
    display: flex;
    height: 44px;
    background-color: #ffffff;
    text-align: center;
    z-index: 1000;

    .left{
      display: flex;
      line-height: 12px;
      flex: 1;

      .ll{
        flex: 1;

        .icon{
          width: 22px;
          height: 22px;
          margin: 6px auto 0;
        }
        .icon1{
          background:url("~assets/imgs/detail/detail_bottom.png") 0 0/100% ;
        }
        .icon2{
          background:url("~assets/imgs/detail/detail_bottom.png") 0 -54px/100%;
        }
        .icon3{
          background:url("~assets/imgs/detail/detail_bottom.png") 0 -98px/100%;
        }
        span{
          font-size: 12px;
        }

      }
    }
    .right{
      display: flex;
      line-height: 44px;
      flex: 1;
      font-size: 14px;
      div{
        height: 100%;
        flex: 1;
      }
      div:nth-child(1){
    background-color: #ffe817;
        color: #333;
      }
      div:nth-child(2){
        background-color: #f69;
        color: #ffffff;
      }

    }
  }
</style>
