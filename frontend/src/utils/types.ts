export interface ISetCookie {
  cookieName: string;
  value: string;
}

export interface IDeleteCookie {
  cookieName: string;
  path: string;
  domain: string;
}

export interface ILoginResponse {
  status: number;
  message: string;
  data: {
    token: string;
  };
}

export interface IUser {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  isAdmin: boolean;
  img?: string;
}

export interface Comments {
  _id: string;
  user: {
    _id: string;
    firstname: string;
    lastname: string;
    img?:string;
  };
  comments: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  postID?: string;
  index?: number;
}

export interface User {
  _id: string;
  firstname: string;
  lastname: string;
  createdAt: string;
  img?: string;
}

export interface IUserPost{
  post: string;
}

export interface ICommentPost{
    postID: string,
    comments: string
}

export interface ICommentDelete{
  postID: string,
  commentID: string,
  index: number,
}

export interface PostProps {
  _id: string;
  userOwner: User;
  post: string;
  comments?: Comments[] | [] | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IChangePassword{
  currentpassword: string;
  newpassword: string;
  confirmnewpassword: string;
}


export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegistration {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword: string;
}


export interface IDispatchResponse {
  error?: {
    message?: string;
  };
  meta: any;
  payload: any;
  type: string;
}



export interface APIResponse<T> {
  status: number;
  data?: T | T[] | null;
  message?: string;
}
