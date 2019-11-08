import {ADD_CART,ADD_COUNT} from "./mutations-type";

export default  {
  addCart(context,payload){
    let haved = false;
    for (let item of context.state.cartList) {
      if (item.iid === payload.iid) {
        context.commit(ADD_COUNT,item);
        haved = true;
      }
    }
    if (!haved) {
      payload.count = 1;
      context.commit(ADD_CART,payload);
    }
    console.log(context.state.cartList)
  }
}
