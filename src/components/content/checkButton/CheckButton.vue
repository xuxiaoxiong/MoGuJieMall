<template>
  <div class="checkbutton" :class="{active:isActive}" >
    <img src="~assets/imgs/cart/tick.svg" alt="">
  </div>
</template>

<script>
    export default {
        name: "CheckButton",
        props:{
            isActive:{
                type:Boolean,
                default:false
            }
        },
    methods:{

    },
    }
</script>

<style scoped lang="scss">
  .checkbutton {
    width: 20px;
    height: 20px;
    text-align: center;
    background-color: white;
    border:2px solid #ccc;
    border-radius: 50%;
  }

  .active {
    background-color: #ff8198 !important;
    border-color: #ff8198;
  }
</style>
