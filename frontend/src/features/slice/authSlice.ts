import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { isLoggedIn } from "../../utils/helpers";
import { APIResponse, ILoginResponse, IUser } from "../../utils/types";
import { authEntry, authLogin, authLogout, authRegister, userChangePassword, userSetImage } from "../asyncThunk";

const status = isLoggedIn();

export interface IAuthState {
  loggedIn: boolean;
  user: IUser;
  isLoading: boolean;
}

const initialState: IAuthState = {
  loggedIn: status,
  user: {} as IUser,
  isLoading: false,
};

const authSlice: any = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authReset: (state: IAuthState) => {
      state.loggedIn = false;
      state.user = {} as IUser;
      state.isLoading = false;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IAuthState>) => {
    builder
      .addCase(authLogin.pending, (state: IAuthState) => {
        state.loggedIn = false;
        state.isLoading = true;
      })
      .addCase(authLogin.fulfilled, (state: IAuthState) => {
        state.loggedIn = true;
        state.isLoading = false;
      })
      .addCase(authLogin.rejected, (state: IAuthState) => {
        state.loggedIn = false;
        state.isLoading = false;
      })
      .addCase(authRegister.pending, (state: IAuthState) => {
        state.loggedIn = false;
        state.isLoading = true;
      })
      .addCase(authRegister.fulfilled, (state: IAuthState) => {
        state.loggedIn = true;
        state.isLoading = false;
      })
      .addCase(authRegister.rejected, (state: IAuthState) => {
        state.loggedIn = false;
        state.isLoading = false;
      })
      .addCase(authEntry.pending, (state: IAuthState) => {
        state.isLoading = true;
      })
      .addCase(
        authEntry.fulfilled,
        (state: IAuthState, action: PayloadAction<APIResponse<{}>>) => {
          const data = action.payload.data as IUser;
          state.user = data;
          state.isLoading = false;
          state.loggedIn = true;
        }
      )
      .addCase(authLogout.pending, (state: IAuthState) => {
        state.isLoading = true;
      })
      .addCase(authLogout.fulfilled, (state: IAuthState) => {
        state.user = {} as IUser;
        state.loggedIn = false;
        state.isLoading = false;
      })
      .addCase(authLogout.rejected, (state: IAuthState) => {
        state.isLoading = false;
      })
      .addCase(userChangePassword.pending, (state: IAuthState) => {
        state.isLoading = true;
      })
      .addCase(userChangePassword.fulfilled, (state: IAuthState) => {
        state.isLoading = false;
      })
      .addCase(userChangePassword.rejected, (state: IAuthState) => {
        state.isLoading = false;
      })
      .addCase(userSetImage.pending, (state: IAuthState)=>{
        state.isLoading = true;
      })
      .addCase(userSetImage.fulfilled, (state: IAuthState, action: PayloadAction<APIResponse<{}>>)=>{
        const data = action.payload.data as IUser;
         state.isLoading = false;
         state.user = data;
         state.loggedIn = true;
      })
      .addCase(userSetImage.rejected, (state: IAuthState)=>{
         state.isLoading = false;
      })
  },
});

export default authSlice.reducer;
