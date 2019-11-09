<template>

  <div class="cart-view">
    <nav-bar-item class="navbar">
      <div slot="nav_center" class="nav_center">
        购物车({{getCartLength}})
      </div>
    </nav-bar-item>
    <cart-list></cart-list>
    <cart-bottom-bar @chkClick="chkClick1"></cart-bottom-bar>
  </div>

</template>

<script>
    import CartNavBar from "./navbar/CartNavBar";


    import NavBarItem from "components/common/navbar/NavBarItem";

    //把getter编程计算属性。需要这一步
    import {mapGetters} from "vuex"
    import CartList from "./childComps/CartList";
    import CartBottomBar from "./childComps/CartBottomBar";

    export default {
        name: "Cart",
        data() {
            return {}
        },
        components: {
            CartNavBar,
            NavBarItem,
            CartList,
            CartBottomBar,
        },
        methods:{
            chkClick1(isActive){
                console.log(isActive);
                this.getCartList.forEach((item) => {
                    this.$store.commit("changeChk",item,isActive);
                });

            }
        },
        computed: {
            //把vuex的getter映射成计算属性

            // ...mapGetters({
            //     length:"getCartLength",
            //     list:"getCartList"
            // }),
            ...mapGetters([
                "getCartLength", "getCartList"
            ]),

        },
    }
</script>

<style scoped lang="scss">
  .cart-view {
    height: 100vh;
    .navbar{
      position: relative;
      z-index: 3;
    }
    .nav_center{
      color: white;
    }
  }
</style>
