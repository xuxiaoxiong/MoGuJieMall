import Toast from "./Toast";

const obj ={}

obj.install = function (Vue) {
  const toastconstructor = Vue.extend(Toast);
  //注意要加new
  const toast = new toastconstructor();
  toast.$mount(document.createElement("div"));
  document.body.append(toast.$el);
  //注意是toast，不是Toast
  Vue.prototype.$toast = toast;
};

export default obj;
