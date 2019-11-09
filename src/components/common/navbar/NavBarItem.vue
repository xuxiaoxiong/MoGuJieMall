<template>
    <div class="nav">
        <div class="left"><slot name="nav_left"></slot></div>
        <div class="center"><slot name="nav_center"></slot></div>
        <div class="right"><slot name="nav_right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem"
    }
</script>

<style scoped lang="scss">
    .nav{
      position: relative;
        display: flex;
        width: 100%;
        height: 44px;
        text-align: center;
        line-height: 44px;
        background-color: #FF699C;
        .left,.right{
            width: 60px;
            line-height: 44px;
        }
        .center{
            flex: 1;
            text-align: center;
        }

    }

</style>
