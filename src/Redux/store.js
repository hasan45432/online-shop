import { configureStore } from "@reduxjs/toolkit";
import fetchStorReducer from "./store/fetchStor";

export default configureStore({
  reducer: {
    fetchStor: fetchStorReducer,
  },
});
