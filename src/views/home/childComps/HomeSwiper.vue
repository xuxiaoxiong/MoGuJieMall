<template>
  <swiper>
    <swiper-item v-for="item in banner">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="homeSwiperImgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
    import Swiper from "components/common/swiper/Swiper";
    import SwiperItem from "components/common/swiper/SwiperItem";

    export default {
        name: "HomeSwiper",
        props: {
            banner: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                isLoad : false
            }
        },
        components: {
            Swiper,
            SwiperItem
        },
        methods: {
            homeSwiperImgLoad() {
                //只向外面发送一次
                if(!this.isLoad){
                    this.isLoad = true;
                    this.$emit("homeSwiperImgLoad");
                }
            }
        },
    }
</script>

<style scoped>

</style>
