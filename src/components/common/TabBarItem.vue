<template>
    <div class="tab-item" @click="change">
        <div class="icon" v-if="isActive">
            <slot name="tabbar-item-active"></slot>
        </div>
        <div class="icon"  v-else>
            <slot name="tabbar-item-icon"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="tabbar-item-txt"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props: {
            path:String,
            activeColor:{
                type:String,
                default:'#EE7F94'
            }
        },
        data() {
            return {
            }
        },
        methods: {
            change(){
                this.$router.replace(this.path);
            }
        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) != -1;
            },
            activeStyle(){
                return this.isActive ? { color:this.activeColor } : {}
            }

        }
    }
</script>

<style scoped lang="scss">
    .tab-item {
        flex: 1;
        height: 49px;
        font-size: 14px;
        text-align: center;

       .icon{
           img {
               width: 24px;
               height: 24px;
               margin-top: 3px;
               vertical-align: middle;
           }
       }
    }


</style>