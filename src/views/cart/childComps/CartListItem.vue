<template>
  <div class="cartlist-item">
    <div class="left">
      <check-button :isActive="product.checked" @click.native="checkChange"></check-button>
    </div>
    <div class="center"><img :src="product.image" alt=""></div>
    <div class="right">
      <div class="title">{{product.title}}</div>
      <p>{{product.desc}}</p>
      <div class="buy-info">
        <div class="price">{{product.price}}</div>
        <div class="count">&times;{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    import CheckButton from "components/content/checkButton/CheckButton";

    export default {
        name: "CartListItem",
        components: {
            CheckButton,
        },
        props: {
            product: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
      methods:{
          checkChange(){
              this.product.checked = !this.product.checked;
          }
      },
    }
</script>

<style scoped lang="scss">
  .cartlist-item {
    display: flex;
    height: 100px;
    padding: 5px 6px 5px 0;
    border-bottom: 1px solid #ccc;

    .left {
      margin-top: 35px;
      padding: 0 2px;
    }

    .center {
      height: 100%;

      img {
        height: 100%;
        border-radius: 5px;
      }
    }

    .right {
      position: relative;
      padding: 0 4px 0 4px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-wrap: break-word;

      p{

        font-size: 12px;
        margin-top: 9px;
      }


      .buy-info {
        position: absolute;
        height: 24px;
        bottom: 4px;
        left: 4px;
        right: 0px;


        .price {
          float: left;
          color: darkorange;
        }

        .count {
          float: right;
          color: #000000;
        }
      }
    }
  }
</style>
