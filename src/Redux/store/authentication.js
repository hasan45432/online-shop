import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import swal from "sweetalert";

export const registerState = createAsyncThunk(
  "state/registerState",
  async (arg) => {
    console.log(arg);
    return fetch(arg.url, {
      method: "POST",
      body: JSON.stringify(arg.body),

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        } else if (res.status === 409) {
          swal({
            title: "شما قبلا در سایت ثبت نام کردین",
            icon: "error",
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

export const loginState = createAsyncThunk("state/loginState", async (arg) => {
  console.log(arg);
  return fetch(arg.url, {
    method: "POST",
    body: JSON.stringify(arg.body),

    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        console.log(res);
        return res.json();
      } else {
        swal({
          title: "نام کاربری یا رمز عبور اشتباه است",
          icon: "error",
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
});

export const getUserData = createAsyncThunk(
  "state/getUserData",
  async (arg) => {
    console.log(arg);
    return fetch(arg.url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${arg.userToken}`,
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
    builder.addCase(registerState.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(loginState.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default slice.reducer;
