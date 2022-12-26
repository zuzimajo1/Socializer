/**
 * Checks if the email is valid
 * @param {string} email - email to be validated
 *
 * @returns {void}
 */

import { useAppDispatch } from "../hooks/rtk.hooks";
import { fetchAllPost } from "../features/asyncThunk";
import { APIResponse, IDeleteCookie, ISetCookie } from "./types";


/**
 * Check if the given email is valid email address
 * @param {string} - the given email to be validated
 * 
 * @returns {boolean} - returns true if the email is not valid
 */


export const validateEmail = (email: string) => {
  let atPosition: number = email.trim().indexOf("@");
  let dotPosition: number = email.trim().lastIndexOf(".");

  if (atPosition < 1 || dotPosition - atPosition < 2) {
    return true;
  }
 
};



/**
 * Checks if the given name is valid
 * Taken from - https://stackoverflow.com/questions/2282700/how-can-i-validate-a-full-name-input-in-a-form-using-javascript
 * @param {string} name  - the given name to be validated
 * @param {string} field - the given input field name to be used for throwing error message
 *
 * @returns {boolean} - returns true if the field name is invalid
 */

export const validatedName = (name: string) => {
  let nameRegex: RegExp = /^[a-zA-Z-' ]+$/;
  if (name.trim().match(nameRegex) === null) {
     return true
  }
};

/**
 * Checks if the given field is empty
 *
 * @param {string} - the given text or value of an input field
 * @param {string} - the given input field name to be used for throwing error message
 *
 * @returns {boolean} - return true if the field is empty
 *
 */

export const isEmpty = (text: string) => {
  if (text?.trim() === "" || !text){
    return true;
  }
 
};

/**
 * Get cookie in the browser
 * @param {string} name - the name of the cookie
 *
 * @returns {boolean | string} - either returns the cookie value or false (cookie not found)
 *
 */

export const getCookie = (name: string): boolean | string => {
  let match: RegExpMatchArray | null = document.cookie.match(
    new RegExp("(^| )" + name + "=([^;]+)")
  );
  if (match) {
    return match[2];
  } else {
    return false;
  }
};

/**
 * Sets cookie in the browser after login
 * @param {string} cookieName - the name of the cookie to be stored in the browser
 * @param {string} value - the value of the cookie to be stored
 *
 * @returns {void}
 */

export const setCookie = ({ cookieName, value }: ISetCookie): void => {
  const cookieDuration: number = 18000; //The cookie will expire after 5 hours.
  document.cookie = `${cookieName}=${value}; max-age=${cookieDuration}; path=/ `;
};

/**
 * Deletes cookie in the browser after logout
 * @param {string} cookieName - the name of the cookie
 * @param {string} path - the path of the cookie
 * @param {string} domain - the domain name of the cookie
 *
 * @returns {void}
 *
 */

export const deleteCookie = ({cookieName, path, domain,}: IDeleteCookie): void => {
  if (getCookie(cookieName)) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;
  }
};


/**
 * Checks if the user is logged in based on the cookie stored
 * 
 * @returns {boolean} - return true if the cookie is present, else false; 
 *
 */

export const isLoggedIn = ():boolean => {
  if(getCookie("accessToken")){
    return true;
  }else{
    return false;
  }
}



/**
 * 
 * Return message and show Notification if an error occurs
 * 
 * @param {any} error - the error message
 * @param {string} title - the title of the error depending on the action
 * 
 * @returns {string} - return the error message for slices to reject
 */

export const isError = (error: any): void => {
    let message: string =  (error.response?.data?.error || error.response?.data?.errors[0] || error.response?.data?.errors[1]);
    throw new Error(message);

}


