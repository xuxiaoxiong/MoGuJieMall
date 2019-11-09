<template>
  <div class="cartlist">
    <scroll class="scroll" ref="scroll">
      <cart-list-item v-for="item in getCartList" :product="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
    import CartListItem from "./CartListItem";
    import Scroll from "components/common/scroll/Scroll";
    import {mapGetters} from "vuex"

    export default {
        name: "CartList",
        components: {
            CartListItem,
            Scroll,
        },
        computed: {
            ...mapGetters([
                "getCartList"
            ])
        },
        activated() {
            console.log(this.getCartList)
            this.$refs.scroll.refresh();
        },
    }
</script>

<style scoped lang="scss">
  .cartlist {
    height: calc(100% - 44px - 49px);

    .scroll {
      height: 100%;
    }
  }
</style>
