import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import toast from "components/common/toast"
import FastClick from "fastclick"
//实现图片懒加载
import VueLazyload from "vue-lazyload";
//这里引入一个问题，怎么加载图片


Vue.config.productionTip = false;
Vue.use(toast);
Vue.use(VueLazyload,{
  //在这里不能用别名。
  loading: require("./assets/imgs/common/placeholder.png"),
  // loading: "./assets/imgs/common/placeholder.png"
});
//解决移动端300ms延迟
FastClick.attach(document.body);



Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
