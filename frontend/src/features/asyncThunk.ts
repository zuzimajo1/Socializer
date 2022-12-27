import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  changePassword,
  commentDelete,
  commentPost,
  deletePost,
  entry,
  getPosts,
  login,
  logout,
  postPost,
  register,
  setImage,
  
} from "../utils/apiCalls";
import { isError } from "../utils/helpers";
import {
  APIResponse,
  ILoginResponse,
  IUserLogin,
  IUserRegistration,
  IUserPost,
  ICommentPost,
  ICommentDelete,
  IChangePassword,
} from "../utils/types";

/**
 * Async Thunk for auth Login
 * @param {object} - object containing email and password of the user
 *
 * @returns {ILoginResponse} - login response containing the data from the API
 */

export const authLogin = createAsyncThunk(
  "/auth/login",
  async (data: IUserLogin, thunkAPI) => {
    try {
      const loginData = {
        email: data.email,
        password: data.password,
      } as IUserLogin;
      const res: ILoginResponse = await login(loginData);
      thunkAPI.dispatch(authEntry());
      if (res.status === 0) throw new Error(res.message);
      return res;
    } catch (error: any) {
      const message = isError(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/**
 * Async Thunk for Register
 *
 * @param {object} - the object container the firstname, lastname, email, and password of the user
 *
 * @returns {ILoginResponse} - login response containing the data from the API
 */

export const authRegister = createAsyncThunk(
  "/auth/register",
  async (data: IUserRegistration, thunkAPI) => {
    try {
      const registerData = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
        confirmpassword: data.confirmpassword,
      } as IUserRegistration;

      const res: ILoginResponse = await register(registerData);
      thunkAPI.dispatch(authEntry());
      if (res.status === 0) throw new Error(res.message);
      return res;
    } catch (error) {
      const message = isError(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/**
 * Async Thunk for Refreshing by fetching again the data of the user and all the post
 *
 * @returns {void} - Nothing returns in this function
 */

export const refreshAll = createAsyncThunk("/refresh", (_, thunkAPI) => {
  try {
    thunkAPI.dispatch(authEntry());
    thunkAPI.dispatch(fetchAllPost());
  } catch (error) {
    const message = isError(error);
    return thunkAPI.rejectWithValue(message);
  }
});

/**
 * Async Thunk for Logout
 *
 */
export const authLogout = createAsyncThunk(
  "/auth/logout",
  async (_, thunkAPI) => {
    try {
      await logout();
    } catch (error: any) {
      const message = isError(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/**
 * Async Thunk for retrieving the data using the jwt
 *
 * @returns {APIResponse<{}>} - return data from the API
 */
export const authEntry = createAsyncThunk(
  "/auth/entry",
  async (_, thunkAPI) => {
    try {
      const res: APIResponse<{}> = await entry();
      if (res.status === 0) throw new Error(res.message);
      return res;
    } catch (error: any) {
      const message = isError(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/**
 * Async Thunk for retrieving all post from the API
 *
 * @returns {APIResponse<{}>} - return data from the API
 */

export const fetchAllPost = createAsyncThunk("/posts", async (_, thunkAPI) => {
  try {
    const res: APIResponse<{}> = await getPosts();
    if (res.status === 0) throw new Error(res.message);
    return res;
  } catch (error: any) {
    const message = isError(error);
    return thunkAPI.rejectWithValue(message);
  }
});

/**
 * Async Thunk for posting a post
 *
 * @returns {APIResponse<{}>} - return data from the API
 */

export const userPost = createAsyncThunk(
  "/posts/post",
  async (data: IUserPost, thunkAPI) => {
    try {
      const res: APIResponse<{}> = await postPost(data);
      if (res.status === 0) throw new Error(res.message);
      return res;
    } catch (error) {
      const message = isError(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/**
 * Async Thunk for deleting own post
 *
 * @returns {APIResponse<{}>} - return data from the API
 */

export const userDeletePost = createAsyncThunk(
  "/posts/postDelete",
  async (postID: string, thunkAPI) => {
    try {
      const res: APIResponse<{}> = await deletePost(postID);
      if (res.status === 0) throw new Error(res.message);
      return res;
    } catch (error) {
      const message = isError(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/**
 * Async Thunk for posting comment to the post
 *
 * @returns {APIResponse<{}>} - return data from the API
 *
 */

export const userPostComment = createAsyncThunk(
  "/posts/comment",
  async (data: ICommentPost, thunkAPI) => {
    try {
      const res: APIResponse<{}> = await commentPost(data);
      if (res.status === 0) throw new Error(res.message);
      return res;
    } catch (error) {
      const message = isError(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/**
 * Async Thunk for deleting comment from the post
 * The ones who can delete a comment are - Post Owner, Comment Owner, Admin
 *
 * @returns {APIResponse<{}>} - return data from the API
 */

export const userDeleteComment = createAsyncThunk(
  "/posts/deletecomment",
  async (data: ICommentDelete, thunkAPI) => {
    try {
      const res: APIResponse<{}> = await commentDelete(data);
      if (res.status === 0) throw new Error(res.message);
      return res;
    } catch (error) {
      const message = isError(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/**
 * Async Thunk for changing the password
 *
 * @returns {APIResponse<{}>} - return data from the API
 */

export const userChangePassword = createAsyncThunk(
  "auth/changepassword",
  async (data: IChangePassword, thunkAPI) => {
    try {
      const res: APIResponse<{}> = await changePassword(data);
      if (res.status === 0) throw new Error(res.message);
      return res;
    } catch (error: any) {
      const message = isError(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);


/**
 * Async Thunk for setting/changing image by the user
 * 
 * @returns {APIResponse<{}>} - return data from the API
 */

export const userSetImage = createAsyncThunk(
  "auth/setImage",
  async (url: string, thunkAPI)=>{
    try {
      const res: APIResponse<{}> = await setImage(url);
        if (res.status === 0) throw new Error(res.message);
        return res;
    } catch (error: any) {
        const message = isError(error);
        return thunkAPI.rejectWithValue(message);
    }
  }
)