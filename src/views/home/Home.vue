<template>
  <div id="home">
    <home-nav-bar></home-nav-bar>
    <tab-control :title="title" class="tab_controller" @itemClick="itemClick" ref="tabcontrol1"
                 :class="{fixed: tabIsFixed}" v-show="tabIsFixed"></tab-control>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll" @pullUp="pullUp" :pullUpLoad="true">
      <home-swiper :banner="banner" @homeSwiperImgLoad="homeSwiperImgLoad"></home-swiper>
      <home-recommend-view :recommend="recommand"></home-recommend-view>
      <home-feature-view></home-feature-view>
      <tab-control :title="title" class="tab_controller" @itemClick="itemClick" ref="tabcontrol"></tab-control>
      <good-list :goods="getCurGoodData"></good-list>

    </scroll>
    <back-top @click.native="backTop" v-show="backTopIsShow"></back-top>
  </div>

</template>

<script>

    import HomeSwiper from "./childComps/HomeSwiper";
    import HomeRecommendView from "./childComps/HomeRecommendView";
    import HomeFeatureView from "./childComps/HomeFeatureView";


    import HomeNavBar from "./navbar/HomeNavBar";
    import GoodList from "components/content/GoodsList/GoodList";
    import TabControl from "components/content/tabCntrol/TabControl";
    import {getHomeMultidata, getHomeData} from "network/home";
    import Scroll from "components/common/scroll/Scroll";
    import BackTop from "components/content/backtop/BackTop";
    import {deBounce} from "common/utils";

    import {POP, SELL, NEW} from "@/common/const";


    export default {
        name: "Home",
        data() {
            return {
                banner: [],
                recommand: [],
                title: [
                    "首页", "新款", "精选"
                ],
                goods: {
                    'pop': {page: 1, list: []},
                    'new': {page: 1, list: []},
                    'sell': {page: 1, list: []},
                },
                currentGoodTabType: POP,
                backTopIsShow: false,
                tabOffsetTop: 0,
                tabIsFixed: false,
                leaveY : 0,

            }
        },
        components: {
            HomeNavBar,
            HomeSwiper,
            HomeRecommendView,
            HomeFeatureView,
            TabControl,
            GoodList,
            Scroll,
            BackTop,
        },
        created() {
            //
            this.getHomedata();
            //
            this.getHomeGoodsData(POP);
            this.getHomeGoodsData(NEW);
            this.getHomeGoodsData(SELL);


        },
        methods: {
            //注意外面包裹可一层方法。

            /*
            * 网络请求事件
            * */
            getHomedata() {
                getHomeMultidata().then(res => {
                    this.banner = res.data.banner.list;
                    this.recommand = res.data.recommend.list;
                })
            },
            getHomeGoodsData(type) {
                const page = this.goods[type].page;
                getHomeData(type, page).then(res => {
                    const goodsData = res.data.list;
                    this.goods[type].list.push(...goodsData);
                    this.goods[type].page++;
                })
            },
            /*
            * 事件监听事件
            * */
            itemClick(index) {
                switch (index) {
                    case 0:
                        this.currentGoodTabType = POP;
                        break;
                    case 1:
                        this.currentGoodTabType = NEW;
                        break;
                    case 2:
                        this.currentGoodTabType = SELL;
                        break;
                }
                this.$refs.tabcontrol.currentIndex = index;
                this.$refs.tabcontrol1.currentIndex = index;
            },
            backTop() {
                //注意这里获取scroll方式。
                this.$refs.scroll.scrollTo(0, 0, 500);
            },
            contentScroll(position) {
                //注意这里是负值
                if ((-position.y) > 1000) {
                    this.backTopIsShow = true
                } else {
                    this.backTopIsShow = false
                }

                //上面代码可以缩写成下面这样
                this.tabIsFixed = ((-position.y) > this.offsetTop);

            },
            pullUp() {
                this.getHomeGoodsData(this.currentGoodTabType);
                this.$refs.scroll.finishPullUp();
            },
            homeSwiperImgLoad() {
                this.offsetTop = this.$refs.tabcontrol.$el.offsetTop;
            },

        },
        computed: {
            getCurGoodData() {
                return this.goods[this.currentGoodTabType].list;
            }
        },
        mounted() {
            // 事件总线
            const refresh = deBounce(this.$refs.scroll.refresh, 200);
            this.$bus.$on("itemImgLoad", () => {
                refresh();
            });


        },
        activated() {
            this.$refs.scroll.scrollTo(0,this.leaveY,0);
            //如果不加refresh有可能会滑不动
            this.$refs.scroll.refresh();
        },
        deactivated() {
            this.leaveY = this.$refs.scroll.scrollY();
        },


    }
</script>

<style scoped lang="scss">
  #home {
    position: relative;
    height: 100vh;

    .content {
      position: absolute;
      left: 0;
      right: 0;
      top: 44px;
      bottom: 49px;
      /*height: calc(100% - 93px);*/
      /*margin-top: 51px;*/
      overflow: hidden;

      /*.tab_controller {*/
      /*  position: sticky;*/
      /*  top: 44px;*/
      /*}*/

      /*.fixed {*/
      /*  position: fixed;*/
      /*  left: 0;*/
      /*  right: 0;*/
      /*  top: 44px;*/
      /*}*/
    }


  }
  .fixed{
    position: relative;
    z-index: 11;
  }

</style>
