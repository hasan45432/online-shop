import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { json } from "react-router-dom";

export const getStates = createAsyncThunk("state/getStates", async (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${adminToken.token}`,
    },
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(url);
      console.log(data);
      return data;
    });
});
export const removeState = createAsyncThunk(
  "state/removeState",
  async (url) => {
    console.log(url);
    return fetch(url, {
      method: "DELETE",
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

const adminToken = JSON.parse(localStorage.getItem("admin"));

export const createState = createAsyncThunk(
  "state/createState",
  async (arg) => {
    console.log(arg.formDatas);
    console.log(adminToken);

    return fetch(arg.url, {
      method: "POST",
      body: arg.formDatas,
      headers: {
        Authorization: `Bearer ${adminToken}`,
        "Content-Type": "application/json",
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

export const updateState = createAsyncThunk(
  "state/createState",
  async (url) => {
    return fetch(url, {
      method: "PUT",
    });
  }
);

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStates.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(createState.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(removeState.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default slice.reducer;
