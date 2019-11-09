<template>
    <div class="nav">
        <tab-bar-item path="/home">
            <img src="~assets/imgs/tabbar/home.png" slot="tabbar-item-icon" alt="">
            <img src="~assets/imgs/tabbar/home_active.png" slot="tabbar-item-active" alt="">
            <div slot="tabbar-item-txt">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/catagory">
            <img src="~assets/imgs/tabbar/category.png" slot="tabbar-item-icon" alt="">
            <img src="~assets/imgs/tabbar/category_active.png" slot="tabbar-item-active" alt="">
            <div slot="tabbar-item-txt">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart">
            <img src="~assets/imgs/tabbar/cart.png" slot="tabbar-item-icon" alt="">
            <img src="~assets/imgs/tabbar/cart_active.png" slot="tabbar-item-active" alt="">
            <div slot="tabbar-item-txt">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile">
            <img src="~assets/imgs/tabbar/profile.png" slot="tabbar-item-icon" alt="">
            <img src="~assets/imgs/tabbar/profile_active.png" slot="tabbar-item-active" alt="">
            <div slot="tabbar-item-txt">我的</div>
        </tab-bar-item>
    </div>
</template>

<script>
    import TabBarItem from "./TabBarItem";


    export default {
        name: "TabBar",
        components:{
            TabBarItem
        }
    }
</script>

<style scoped lang="scss">
    .nav{
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 49px;
        background-color: #f6f6f6;
        box-shadow: 0px -1px 1px rgba(100, 100, 100, .8);
    }
</style>
