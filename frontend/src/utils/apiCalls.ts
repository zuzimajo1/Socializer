import axios, { AxiosRequestConfig } from "axios";
import { getCookie, setCookie } from "./helpers";

import { UserLoginProps, UserRegisterProps, APIResponse, LoginReponseProps } from "./types";

export const BaseAPIUrl = process.env.REACT_APP_API;


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
        request.headers["Authorization"] = `Bearer ${token}`;
    }

    const res = await axios(request);
    return res.data as T;
}


/**
 * Login API Request, If success, create a cookie with 5 hours duration
 * @param {string} email - the email of the user
 * @param {password} password - the password of the user
 * @returns { LoginReponseProps }
 */

export const login = async (email: string, password: string): Promise<LoginReponseProps> => {
    const res = await apiRequest<LoginReponseProps>(`/auth/login`, {
        method: "post",
        headers : {
            "Content-Type": "application/json",
        },
        data: { email, password }
    })

    if(res.status === 1){
        setCookie({cookieName: "accessToken", value: res.data.token})
    }
    return res;
}


/**
 * Register user
 * @param {string} firstname - the first name of the user
 * @param {string} lastname - the last name of the user
 * @param {string} email - the email of the user
 * @param {password} password - the password of the user
 * 
 * @returns {APIResponse<{}>} - a promise of the returned data from the API
 * 
 */

export const register = async ({firstname, lastname, email, password}: UserRegisterProps): Promise<APIResponse<{}>>=> {
    const registerUser = {
        firstname,
        lastname,
        email,
        password,
    };
    const res = await apiRequest<APIResponse<{}>>(`auth/register`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: registerUser

    });

    return res;
}


/**
 * Fetch all post from the users including the admin
 * 
 * @returns {APIResponse<{}>} - a promise of the returned data from the API
 */

export const fetchAllPost = async (): Promise<APIResponse<{}>> => {
    const res = await apiRequest<APIResponse<{}>>(`allpost`, {
        method: "get",
        headers: {
            "Content-Type": "appication/json",
        }
    })
    return res;
}










