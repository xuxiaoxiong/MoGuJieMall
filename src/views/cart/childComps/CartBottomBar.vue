<template>
    <div class="cart-bottom-bar">
      <div class="left"><check-button class="chkbtn" @click.native="chkClick" :isActive="isActive"/><span class="left-txt">全选</span></div>
      <div class="center">合计：{{getTotalPrice | priceFilter}}</div>
      <div class="right">去结算{{getTotalCount}}</div>
    </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";

  import {mapGetters} from "vuex"
    export default {
        name: "CartBottomBar",
        components: {CheckButton},
        data(){
            return{
                isActive:false
            }
        },
        methods:{
            chkClick(){
                this.isActive = !this.isActive;
                this.$store.commit("changeChk",this.isActive);
            }
        },
  computed:{
      ...mapGetters([
          "getCartLength", "getCartList"
      ]),
      getTotalPrice(){
          let price = 0 ;
          for (let i = 0; i < this.getCartLength; i++) {
              let tmp = this.getCartList[i];
              if(tmp.checked){
                  price+=parseFloat(tmp.price.substring(1))*tmp.count;
              }
          }
          return price;
      },
      getTotalCount(){
          let count = 0 ;
          for (let i = 0; i < this.getCartLength; i++) {
              let tmp = this.getCartList[i];
              if(tmp.checked){
                  count++
              }
          }
          return count;
      }
  },
  filters:{
      priceFilter(price){
          return price.toFixed(2);
      }
  },
    }
</script>

<style scoped lang="scss">
.cart-bottom-bar{
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  height: 44px;
  background-color:#eeeeee;
  font-size: 14px;

  .left{
    float: left;
    height: 44px;
    margin-left: 15px;
    margin-right: 15px;
    .chkbtn{
      display: inline-block;
      position: relative;
      top: 4px;
      margin-right: 4px;

    }
    .left-txt{
      line-height: 44px;
    }
  }
  .center{
    float: left;
    height: 44px;
    line-height: 44px;
  }
  .right{
    float: right;
    height: 44px;
    width: 100px;
    background-color:  orangered;
    text-align: center;
    color: white;
    line-height: 44px;
  }
}
</style>
