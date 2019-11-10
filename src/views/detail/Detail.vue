<template>
  <div class="detail1">
    <detail-nav @itmClick="navItmClick" :currentIndex="currentNavIndex"></detail-nav>
    <scroll class="detail-content" ref="scroll" :probeType="3" @scroll="scroll">
      <detail-swiper :imgs="imgArys"></detail-swiper>
      <goods-detail-info :goods="goods" ref="goodsdetails"></goods-detail-info>
      <shop-detail :shop="shop"></shop-detail>
      <detail-goods-info :goods-info="goodsInfo" @imgLoad="imgLoad"></detail-goods-info>
      <goods-param :goods-param="goodsParam" ref="goodsparams"></goods-param>
      <goods-comment :comment="goodComment" ref="goodscomment"></goods-comment>
      <good-list :goods="goodsRecommend" ref="gooodsrecommend"></good-list>


    </scroll>
    <back-top v-show="backTopIsShow"  @click.native="backToTop"/>
    <detail-bottom-bar  @addCart="addCart"></detail-bottom-bar>

  </div>
</template>

<script>
    import DetailNav from "./childComps/DetailNav";
    import DetailSwiper from "./childComps/DetailSwiper";
    import GoodsDetailInfo from "./childComps/GoodsDetailInfo";
    import ShopDetail from "./childComps/ShopDetail";
    import GoodsParam from "./childComps/GoodsParam";
    import GoodsComment from "./childComps/GoodsComment";
    import DetailBottomBar from "./childComps/DetailBottomBar";
    import DetailGoodsInfo from "./childComps/DetailGoodsInfo";


    import Scroll from "components/common/scroll/Scroll";
    import GoodList from "components/content/GoodsList/GoodList";
    import BackTop from "components/content/backtop/BackTop";

    import {getDetail, Goods, getRecommend} from "network/detail";

    import {deBounce} from "common/utils";
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
                itemTopDistance: [],
                setItemTopDistance: null,
                currentNavIndex: 0,
                backTopIsShow: false,

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
            DetailBottomBar,
            BackTop,
        },
        mixins: [imgLoadMix],
        methods: {
            imgLoad() {
                this.refresh();
                this.setItemTopDistance();

            },
            scroll(position) {
                if(-(position.y) > 1000){
                    this.backTopIsShow = true;
                }
                if(-(position.y) < 1000){
                    this.backTopIsShow = false;
                }

                for (let i = this.itemTopDistance.length - 1; i > -1; i--) {
                    if (-(position.y) > this.itemTopDistance[i]) {
                        this.currentNavIndex = i;
                        break;
                    }
                }
            },
            navItmClick(index) {
                this.currentNavIndex = index;
                this.$refs.scroll.scrollTo(0, -this.itemTopDistance[index], 700);
            },
            backToTop(){
                this.$refs.scroll.scrollTo(0,0,700);
            },
            addCart(){
                const goods = {};
                goods.image = this.imgArys[0];
                goods.title = this.goods.title;
                goods.desc = this.goods.desc;
                goods.price = this.goods.oldPrice;
                goods.iid = this.id;
                this.$store.dispatch("addCart",goods).then(res => {
                    this.$toast.show(res,2000);
                });
            },

        },
        mounted() {
            this.setItemTopDistance = deBounce(() => {
                this.itemTopDistance = [];
                this.itemTopDistance.push(0);
                this.itemTopDistance.push(this.$refs.goodsparams.$el.offsetTop);
                this.itemTopDistance.push(this.$refs.goodscomment.$el.offsetTop);
                this.itemTopDistance.push(this.$refs.gooodsrecommend.$el.offsetTop);
            }, 100);
        },

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
