import {POP, NEW, SELL} from "./const";
import {deBounce} from "./utils";

export const backTopMixin = {
  data: function () {
    return {
      showBackTop: false
    }
  },
  methods: {
    backTop: function () {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}

export const imgLoadMix = {
  data() {
    return {
      imgLoadListener: null,
    }
  },
  mounted() {
    let refresh = deBounce(this.$refs.scroll.refresh, 200);
    this.imgLoadListener = () => {
      refresh();
    };
    this.$bus.$on("itemImgLoad", this.imgLoadListener);
  },
  deactivated() {
    //区分函数，属性
    this.$bus.$off("itemImgLoad", this.imgLoadListener);
  }

}
