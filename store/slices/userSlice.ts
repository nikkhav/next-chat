import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";

const initialState: User = {
  _id: "",
  loggedIn: false,
  username: "",
  firstName: "",
  lastName: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state._id = action.payload._id;
      state.loggedIn = action.payload.loggedIn;
      state.username = action.payload.username;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
