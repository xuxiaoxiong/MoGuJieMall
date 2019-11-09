import {ADD_CART,ADD_COUNT,CHANGE_CHECK_SINGLE} from "./mutations-type";

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
  },
  chgSingle(context,payload,isActive){
    console.log(isActive)
      payload.checked = isActive

  },

}
