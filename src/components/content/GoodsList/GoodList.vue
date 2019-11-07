<template>
    <div class="home_goods_show">
        <goods-list-item v-for="item in goods" :good="item"></goods-list-item>
    </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
    export default {
        name: "GoodList",
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components:{
            GoodsListItem
        }
    }
</script>

<style scoped lang="scss">
  .home_goods_show{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 4px;
  }

</style>
