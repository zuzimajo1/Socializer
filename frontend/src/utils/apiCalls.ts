import axios, { AxiosRequestConfig } from "axios";
import { redirect } from "react-router-dom";
import { deleteCookie, getCookie, setCookie } from "./helpers";
import { IUserLogin, APIResponse, ILoginResponse, IUserRegistration, IUserPost, ICommentPost, ICommentDelete, IChangePassword } from "./types";

export const BaseAPIUrl = import.meta.env.VITE_REACT_APP_URL_ENDPOINT;


/**
 * API Request wrapper which adds the token to the request returns data directly from the response
 * @param {string} path - the path of the API endpoint
 * @param {object} config - the configurations to be attached to the axios request
 * 
 * @returns - the response of the API
 */

const apiRequest = async <T>(path: string, config: AxiosRequestConfig = {}): Promise<T> =>{
    const token = getCookie("accessToken");
    const request = {
         url: `${BaseAPIUrl}${path}`,
         ...config,
    };

    //If there is token, attached it unto the request headers as bearer
    if(token){
        if(!request.headers) request.headers = {};
        request.headers["authorization"] = `Bearer ${token}`;
    }

    const res = await axios(request);
    return res.data as T;
}

/**
 * Login API Request, If success, create a cookie with 5 hours duration
 * @param {string} email - the email of the user
 * @param {password} password - the password of the user
 * @returns { LoginResponseProps } - the return data from the API
 */

export const login = async (loginData: IUserLogin): Promise<ILoginResponse> => {
  const { email, password } = loginData;
  const res = await apiRequest<ILoginResponse>(`/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: { email, password },
  });

    if (res.status === 1) {
      setCookie({ cookieName: "accessToken", value: res.data?.token });
     
    }
  return res;
};


export const entry = async(): Promise<APIResponse<{}>> => {
  const res = await apiRequest<APIResponse<{}>>(`/auth/entry`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res;
}



/**
 * Logout User
 * 
 * logging out by deleting the cookie named accessToken
 */

export const logout = () =>{
  deleteCookie({cookieName: "accessToken", path:"/" , domain: "/"});
}


/**
 * Register user
 * @param {string} firstname - the first name of the user
 * @param {string} lastname - the last name of the user
 * @param {string} email - the email of the user
 * @param {string} password - the password of the user
 * @param {string} confirmpassword - the confirmpassword of the user
 *  
 * @returns {ILoginResponse} - a promise of the returned data from the API
 * 
 */

export const register = async (data: IUserRegistration): Promise<ILoginResponse>=> {
 
    const res = await apiRequest<ILoginResponse>(`/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data
    });
    if(res.status === 1){
      setCookie({ cookieName: "accessToken", value: res.data?.token });
    }

    return res;
}


/**
 * Fetch all post from the users including the admin
 * 
 * @returns {APIResponse<{}>} - a promise of the returned data from the API
 */

export const getPosts = async (): Promise<APIResponse<{}>> => {
    const res = await apiRequest<APIResponse<{}>>(`/allpost`, {
        method: "GET",
        headers: {
            "Content-Type": "appication/json",
        }
    })
    return res;
}

/**
 * Posting post from the user
 * 
 *  @returns {APIResponse<{}>} - a promise of the returned data from the API
 */

export const postPost = async (data: IUserPost): Promise<APIResponse<{}>> => {
  const res = await apiRequest<APIResponse<{}>>("/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data
  });

  return res;
};

/**
 * Deleting post by the user
 * 
 * @returns {APIResponse<{}>} - a promise of the returned data from the API
 */


export const deletePost = async (postID: string): Promise<APIResponse<{}>> => {
  const res = await apiRequest<APIResponse<{}>>(`/post?postID=${postID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },

  })

  return res;
}


/**
 * Create comment to the post
 * 
 * @returns {APIResponse<{}>} - a promise of the returned data from the API
 * 
 */

export const commentPost = async (data: ICommentPost): Promise <APIResponse<{}>> =>{
  const res = await apiRequest<APIResponse<{}>>(`/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data
  })

  return res;
}

/**
 * Delete comment from the post
 * The ones who can delete a comment are - Post Owner, Comment Owner, Admin
 * 
 * @returns {APIResponse<{}>} - a promise of the returned data from the API
 * 
 */

export const commentDelete = async(data: ICommentDelete): Promise <APIResponse<{}>>=>{
  const { postID, commentID, index  } = data;
  const res = await apiRequest<APIResponse<{}>>(`/comment/delete?postID=${postID}&commentID=${commentID}&index=${index}`,{
    method: "PATCH",
    headers:{
      "Content-Type": "application/json",
    }
  });
  return res;
}

/**
 * Change Password by the user
 * 
 * @returns {APIResponse<{}>} - a promise of the returned data from the API
 * 
 */

export const changePassword = async (data: IChangePassword): Promise<APIResponse<{}>> => {
  const res = await apiRequest<APIResponse<{}>>("/auth/changepassword", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  });
  return res;
}



/**
 * Set Image by the user
 * 
 * @returns {APIResponse<{}>} - a promise of the returned data from the API
 * 
 */

export const setImage = async (url: string): Promise<APIResponse<{}>> => {
  const res = await apiRequest<APIResponse<{}>>("/auth/changeimage", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    data: {img: url},
  });

  return res;

}









