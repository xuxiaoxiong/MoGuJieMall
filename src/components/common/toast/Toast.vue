<template>
  <div class="toast" v-show="isShow">
    {{msg}}
  </div>
</template>

<script>
    export default {
        name: "Toast",
        data() {
            return {
                msg: {
                    type: String,
                    default: ""
                },
                isShow: false
            }
        },
        methods: {
            show(msg, duration) {
                this.msg = msg;
                this.isShow = true;
                setTimeout(() => {
                    this.isShow = false;
                    this.msg = "";
                }, duration)
            }
        },
    }
</script>

<style scoped lang="scss">
  .toast {
    /*如果挂载后，不显示。需要把位置调下*/
    position: fixed;
    left: 50%;
    top: 50%;
    padding: 6px 8px;
    font-size: 16px;
    color: #ffffff;
    background: rgba(0, 0, 0, .75);
    transform: translate(-50%, -50%);
    border-radius: 5px;
    z-index: 1999;
  }
</style>
