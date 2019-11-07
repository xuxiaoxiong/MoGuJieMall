<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in imgs" class="swiper-item">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
    import Swiper from "components/common/swiper/Swiper";
    import SwiperItem from "components/common/swiper/SwiperItem";

    export default {
        name: "DetailSwiper",
        props: {
            imgs: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        components: {
            Swiper,
            SwiperItem,
        }
    }
</script>

<style scoped lang="scss">
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>
