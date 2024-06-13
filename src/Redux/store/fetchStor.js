import {
  createSlice,
  createAsyncThunk,
  legacy_createStore,
} from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const adminToken = JSON.parse(localStorage.getItem("admin"));

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

export const createState = createAsyncThunk(
  "state/createState",
  async (url) => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify({
        identifier: "amin_saeedi",
        password: "123456789",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("admin", JSON.stringify(data.accessToken));
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
