<template>
  <div class="detail1">
    <detail-nav></detail-nav>
    <scroll class="detail-content">
      <detail-swiper :imgs="imgArys"></detail-swiper>
      <goods-detail-info :goods="goods"></goods-detail-info>
      <shop-detail :shop="shop"></shop-detail>
      <detail-goods-info :goods-info="goodsInfo"></detail-goods-info>
      <goods-param :goods-param="goodsParam"></goods-param>
      <goods-comment :comment="goodComment"></goods-comment>
      <good-list :goods="goodsRecommend"></good-list>


    </scroll>


  </div>
</template>

<script>
    import DetailNav from "./childComps/DetailNav";
    import DetailSwiper from "./childComps/DetailSwiper";
    import GoodsDetailInfo from "./childComps/GoodsDetailInfo";
    import ShopDetail from "./childComps/ShopDetail";
    import GoodsParam from "./childComps/GoodsParam";
    import GoodsComment from "./childComps/GoodsComment";

    import GoodList from "components/content/GoodsList/GoodList";
    import {getDetail, Goods, getRecommend} from "network/detail";
    import Scroll from "components/common/scroll/Scroll";
    import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
    import {imgLoadMix} from "common/mixin";


    export default {
        name: "Detail",
        data() {
            return {
                id: 0,
                imgArys: [],
                goods: {},
                shop: {},
                goodsInfo: {},
                goodsParam: {},
                goodComment: [],
                goodsRecommend: [],

            }
        },
        created() {
            this.id = this.$route.params.id;

            getDetail(this.id).then(res => {
                const data = res.result;
                this.imgArys = data.itemInfo.topImages;
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
                this.shop = data.shopInfo;
                this.goodsInfo = data.detailInfo;
                this.goodsParam = data.itemParams;
                this.goodComment = data.rate.list;
            })

            getRecommend().then(res => {
                this.goodsRecommend = res.data.list;
            });

        },
        components: {
            GoodsComment,
            DetailGoodsInfo,
            GoodsDetailInfo,
            DetailNav,
            DetailSwiper,
            Scroll,
            ShopDetail,
            GoodsParam,
            GoodList,
        },
        mixins:[imgLoadMix],

    }
</script>

<style scoped lang="scss">
  .detail1 {
    height: 100vh;
    position: relative;
    background-color: #ffffff;
    z-index: 40;

    .detail-content {
      position: absolute;
      left: 0;
      right: 0;
      top: 44px;
      bottom: 0;
      background-color: #fff;

    }
  }


</style>
