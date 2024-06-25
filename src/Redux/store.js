import { configureStore } from "@reduxjs/toolkit";
import fetchStorReducer from "./store/fetchStor";
import authenticationReducer from "./store/authentication";
import ShoppingBasketReducer from "./store/ShoppingBasket";

export default configureStore({
  reducer: {
    fetchStor: fetchStorReducer,
    authentication: authenticationReducer,
    shoppingBasket: ShoppingBasketReducer,
  },
});
