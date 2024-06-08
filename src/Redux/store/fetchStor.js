import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
  async (url) => {
    return fetch(url, {
      method: "POST",
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
    builder.addCase(getState.fulfilled, (state, action) => action.payload);
  },
});

export default slice.reducer;
