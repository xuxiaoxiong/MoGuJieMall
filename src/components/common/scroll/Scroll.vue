<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
    import BScroll from "better-scroll"

    export default {
        name: "Scroll",
        components: {
            BScroll,
        },
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }

        },
        data() {
            return {
                scroll: null,
            }
        },
        methods: {
            scrollTo(x, y, time = 300) {
                this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
            },
            finishPullUp() {
                this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
            },
            refresh() {
                this.scroll && this.scroll.refresh && this.scroll.refresh();
            },
            scrollY(){
                return this.scroll.y ? this.scroll.y : 0;
            },
        },

        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: true,
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad
            });
            //这样写性能会更高一点
            // if(this.scroll.probeType == 2 || this.scroll.probeType == 3){}
                this.scroll.on("scroll", (position) => {
                    this.$emit("scroll", position);
                });


            this.scroll.on("pullingUp", () => {
                this.$emit("pullUp", null)
            });
        }
    }
</script>

<style scoped lang="scss">

</style>
