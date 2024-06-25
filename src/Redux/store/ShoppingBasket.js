import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import swal from "sweetalert";

const userToken = localStorage.getItem("users");

export const addProductToUserBasket = createAsyncThunk(
  "state/addProductToUserBasket",
  async (arg) => {
    console.log(arg);
    return fetch(arg.url, {
      method: "POST",
      body: JSON.stringify(arg.body),

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((res) => {
        if (res) {
          swal({
            title: "محصول مورد نظر با موفقیت به سبد خرید اضافه شد",
            icon: "success",
            buttons: "ok",
          });
          console.log(res);
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        return data;
      });
  }
);

export const getUserProduct = createAsyncThunk(
  "state/getUserProduct",
  async (arg) => {
    console.log(arg);
    return fetch(arg.url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      });
  }
);



const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addProductToUserBasket.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(getUserProduct.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default slice.reducer;
