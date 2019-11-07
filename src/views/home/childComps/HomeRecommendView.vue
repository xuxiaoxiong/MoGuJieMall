<template>
    <div class="recommend">
      <div class="recommend-item" v-for="item in recommend">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommendView",
        props:{
            recommend:{
                type:Array,
                default() {
                    return [];
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.recommend{
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 12px 0 21px;
  border-bottom: 8px solid #eee;
  .recommend-item{
    flex: 1;
    float: left;
    a{
        display: block;
        img{
          width:65px;
          height: 65px;
          margin-bottom: 5px;
        }
    }
  }
}
</style>
