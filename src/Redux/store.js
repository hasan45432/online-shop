import { configureStore } from "@reduxjs/toolkit";
import fetchStorReducer from "./store/fetchStor";
import authenticationReducer from "./store/authentication";

export default configureStore({
  reducer: {
    fetchStor: fetchStorReducer,
    authentication: authenticationReducer,
  },
});
