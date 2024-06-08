import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

export const getState = createAsyncThunk("state/getState", async (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
});

export const removeState = createAsyncThunk(
  "state/removeState",
  async (url, id) => {
    return fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

export const createState = createAsyncThunk(
  "state/createState",
  async (url, body) => {
    console.log(body);
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
  extraReducers: (builder) => {},
});

export default slice.reducer;
