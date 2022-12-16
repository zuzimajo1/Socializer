import { ActionReducerMapBuilder, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { APIResponse, PostProps } from "../../utils/types";
import { fetchAllPost, userDeletePost, userPost } from "../asyncThunk";


export interface PostState{
    isLoading : boolean;
    post: PostProps[];
    isSuccess: boolean;
}



const initialState: PostState = {
    isLoading: false,
    post: [] as PostProps[],
    isSuccess: false,
}


const postSlice: any = createSlice({
    name: "post",
    initialState,
    reducers :{
        postReset : (state: PostState)=>{
            state.isLoading = false;
            state.post = [] as PostProps[];
            state.isSuccess = false;
        },
    },
    extraReducers: (builder : ActionReducerMapBuilder<PostState>)=>{
        builder
          .addCase(fetchAllPost.pending, (state: PostState) => {
            state.isLoading = true;
            state.isSuccess = false;
          })
          .addCase(
            fetchAllPost.fulfilled,
            (state: PostState, action: PayloadAction<APIResponse<{}>>) => {
              const data = action.payload.data as PostProps[];
              state.isLoading = false;
              state.post = data;
              state.isSuccess = true;
            }
          )
          .addCase(fetchAllPost.rejected, (state: PostState) => {
            state.isSuccess = false;
            state.isLoading = false;
          })
          .addCase(userPost.pending, (state: PostState) => {
            state.isLoading = false;
            state.isSuccess = true;
          })
          .addCase(
            userPost.fulfilled, (state: PostState, action: PayloadAction<APIResponse<{}>>) => {
              const data = action.payload.data as PostProps;
              state.post.unshift(data);
              state.isSuccess = true;
            }
          )
          .addCase(userPost.rejected, (state: PostState) => {
            state.isSuccess = false;
          })
          .addCase(userDeletePost.pending, (state: PostState) => {
            state.isLoading = false;
            state.isSuccess = true;
          })
          .addCase(userDeletePost.fulfilled, (state: PostState, action: PayloadAction<APIResponse<{}>>)=>{
            const data = action.payload.data as PostProps;
            state.post = state.post.filter((items)=> items._id !== data._id);
            state.isSuccess = true;
          })
          .addCase(userDeletePost.rejected, (state: PostState)=>{
              state.isLoading = false;
              state.isSuccess = true;
          })
        
    }

})

export default postSlice.reducer;