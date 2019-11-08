import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:{
      addCart(state,payload){
        console.log(state.cartList)
        let haved = false;
        for(let item of state.cartList){
          if(item.iid == payload.iid){
              item.count+=1;
              haved = true;
          }
        }
        if(!haved){
          payload.count = 1;
          state.cartList.push(payload);
        }


      }
  },
});

export default store;
