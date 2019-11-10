import {ADD_CART,ADD_COUNT,CHANGE_CHECK_SINGLE} from "./mutations-type";

export default  {
  addCart(context,payload){
    return new Promise(((resolve, reject) => {
      let haved = false;
      for (let item of context.state.cartList) {
        if (item.iid === payload.iid) {
          context.commit(ADD_COUNT,item);
          resolve("数量加1");
          haved = true;
        }
      }
      if (!haved) {
        payload.count = 1;
        context.commit(ADD_CART,payload);
        resolve("添加购物车成功")
      }
    }))

  },
  chgSingle(context,payload,isActive){
    console.log(isActive)
      payload.checked = isActive

  },

}
