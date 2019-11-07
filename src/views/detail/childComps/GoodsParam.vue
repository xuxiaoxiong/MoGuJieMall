<template>

<!--  最好给遍历的弄个key -->
  <div class="goods-param" v-if="Object.keys(goodsParam).length != 0">
    <table class="size" v-if="goodsParam.rule.tables.length != 0">
      <tr v-for="(item ,index) in goodsParam.rule.tables[0]" :key="index">
        <td v-for="(subitem , indey) in item" :key="indey">{{subitem}}</td>
      </tr>
    </table>
    <table class="other-info" v-if="goodsParam.info.set.length != 0">
      <tr v-for="item in goodsParam.info.set">
        <td>{{item.key}}</td>
        <td class="info-value">{{item.value}}</td>
      </tr>
    </table>

  </div>
</template>

<script>
    export default {
        name: "GoodsParam",
        props: {
            goodsParam: {}
        },
        data() {
            return {}
        },
        created() {
        },
    }
</script>

<style scoped lang="scss">
  .goods-param {
    padding: 18px 10px 18px;
    font-size: 13px;
    font-weight: 500;
    table{
      width: 100%;
      tr{
        display: flex;
        width: 100%;
        border-bottom: 1px solid #ccc;
        td {
          flex: 1;
          padding: 9px 5px;
        }
      }
    }

    .other-info{


        .info-value{
          color: #ff5777;
          flex: 2;
        }
    }
  }
</style>
