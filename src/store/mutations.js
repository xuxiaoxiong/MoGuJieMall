import {ADD_COUNT,ADD_CART,CHANGE_CHECK} from "./mutations-type";

export default {
  [ADD_COUNT](state, payload) {
    payload.count++;
  },
  [ADD_CART](state, payload) {
    payload.checked = true;
    state.cartList.push(payload);
  },
  [CHANGE_CHECK](state,isActive){
    for (let i = 0; i < state.cartList.length; i++) {
      let tmp = state.cartList[i];
      tmp.checked = isActive;
    }
  },
}

