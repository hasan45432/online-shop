import {
  createSlice,
  createAsyncThunk,
  legacy_createStore,
} from "@reduxjs/toolkit";
import { json } from "react-router-dom";

export const getStates = createAsyncThunk("state/getState", async (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
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
    console.log(url);
    return fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: "Jhyoasdasdadshn@gmail.com",
        username: "asdasdasd",
        password: "dsasdasdasd",
        name: {
          firstname: "Joasdashn",
          lastname: "Doasdasde",
        },
        address: {
          city: "kilsadcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12946-3874",
          geolocation: {
            lat: "-37.3459",
            long: "81.1496",
          },
        },
        phone: "1-570-266-7033",
      }),
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
      console.log(action);
      return action.payload;
    });
    builder.addCase(removeState.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default slice.reducer;
