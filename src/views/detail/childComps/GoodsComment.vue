<template>
  <div class="goods-comment" v-if="comment.length != 0">
    <div class="top">
      <a href="">用户评价</a>
      <a href="">更多</a>
    </div>
    <div class="comment-content" v-for="item in comment">
      <div class="content-top">
        <img :src="item.user.avatar" alt="">
        {{item.user.uname}}
      </div>
      <div class="comment">{{item.content}}</div>
      <div class="other-info">{{item.created | showDate}}&nbsp;{{item.style}}</div>
      <div class="footer">
        <img :src="subimage" v-for="subimage in item.images">
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "common/utils";

  export default {
        name: "GoodsComment",
        props: {
            comment: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        filters: {
            showDate(value){
                //注意需要乘1000
                const date = new Date(value*1000);

                return formatDate(date,"yyyy-MM-dd");
            }
        },
    }
</script>

<style scoped lang="scss">
  img {
    vertical-align: middle;
  }

  .goods-comment {

    padding: 0 14px;
    background-color: #ffffff;
    font-weight: 500;

    .top {
      height: 44px;
      line-height: 44px;
      font-size: 14px;
      border-bottom: 1px solid #cccccc;

      a:nth-child(1) {
        float: left;
      }

      a:nth-child(2) {
        float: right;
      }
    }

    .comment-content {
      font-size: 12px;
      padding-top: 7px;

      .content-top img {
        width: 34px;
        height: 34px;
        border-radius: 50%;
      }

      .footer {
        img {
          width: 100px;
          height: 100px;
          margin-right: 1px;
        }
      }

      .other-info, .comment {
        padding: 5px 0;
      }

    }
  }
</style>
