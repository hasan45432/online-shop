import { configureStore } from "@reduxjs/toolkit";
import fetchStorReducer from "./store/fetchStor";
import authenticationReducer from "./store/authentication";
import shoppingBasketReducer from "./store/shoppingBasket";

export default configureStore({
  reducer: {
    fetchStor: fetchStorReducer,
    authentication: authenticationReducer,
    shoppingBasket: shoppingBasketReducer,
  },

});
