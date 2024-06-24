import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import swal from "sweetalert";

const adminToken = localStorage.getItem("users");

export const getStates = createAsyncThunk("state/getStates", async (arg) => {
  console.log(adminToken);
  console.log(arg.url);
  return fetch(arg.url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${adminToken}`,
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
});
export const removeState = createAsyncThunk(
  "state/removeState",
  async (arg) => {
    console.log(arg);
    return fetch(arg.url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${adminToken}`,
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

export const createState = createAsyncThunk(
  "state/createState",
  async (arg) => {
    return fetch(arg.url, {
      method: "POST",
      body: arg.body ? JSON.stringify(arg.body) : arg.newFormData,

      headers: arg.body
        ? {
            Authorization: `Bearer ${adminToken}`,
            "Content-Type": "application/json",
          }
        : {
            Authorization: `Bearer ${adminToken}`,
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
  "state/updateState",
  async (arg) => {
    console.log(arg);
    return fetch(arg.url, {
      method: "PUT",

      body: arg.body ? JSON.stringify(arg.body) : null,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminToken}`,
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
    builder.addCase(getStates.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(createState.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(removeState.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(updateState.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default slice.reducer;
