<template>
    <div class="tab_control">
<!--   不能加this-->
      <div v-for="(item, index) in title" :key="index" :class="{active: index == currentIndex }" @click="changeIndex(index)">
        <span>{{item}}</span>
      </div>

    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props:{
            title:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return {
                currentIndex: 0
            }
        },
        methods:{
            changeIndex(index){
                console.log(index);
                this.currentIndex = index;
                this.$emit("itemClick",index);
            }
        }
    }
</script>

<style scoped lang="scss">
  .tab_control{

    display: flex;
    text-align: center;
    line-height: 40px;
    background-color: white;
    z-index: 2;
    div{
      flex: 1;
      height: 40px;
      span{
        padding: 5px;
      }
    }
    .active{
      color:var(--color-high-text);
      span{
        border-bottom: 3px solid pink;
      }
    }
  }
</style>
