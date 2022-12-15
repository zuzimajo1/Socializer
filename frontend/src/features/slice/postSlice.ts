import { ActionReducerMapBuilder, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { APIResponse, PostProps } from "../../utils/types";
import { fetchAllPost } from "../asyncThunk";


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
        .addCase(fetchAllPost.pending, (state: PostState)=>{
            state.isLoading = true;
            state.isSuccess = false;
        })
        .addCase(fetchAllPost.fulfilled, (state: PostState, action: PayloadAction<APIResponse<{}>>)=>{
            const data = action.payload.data as PostProps[];
            state.isLoading = false;
            state.post = data;
            state.isSuccess = true;
        })
        .addCase(fetchAllPost.rejected, (state: PostState)=>{
            state.isSuccess = false;
            state.isLoading = false;
        })
    }

})

export default postSlice.reducer;