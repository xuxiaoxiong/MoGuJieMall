<template>
    <nav-bar-item>
      <div slot="nav_center" class="nav_center">
        购物车({{$store.state.cartList.length}})
      </div>
    </nav-bar-item>

</template>

<script>
import NavBarItem from "components/common/navbar/NavBarItem";
    export default {
        name: "CartNavBar",
        components:{
            NavBarItem,
        },
        computed:{

        },
    }
</script>

<style scoped lang="scss">

.nav_center{
  height: 100%;
  color: #ffffff;
}
</style>
