 export const Posts =  [
  {
    _id: "6374eb3531cddead9a543aad",
    userOwner: {
      _id: "63731e4c8c29b31f81936d6d",
      firstname: "test",
      lastname: "test",
      createdAt: "2022-11-15T05:06:20.811Z",
    },
    post: "Hello there",
    comments: [],
    createdAt: "2022-11-16T13:52:53.307Z",
    updatedAt: "2022-11-17T15:18:19.273Z",
    __v: 0,
  },
  {
    _id: "63764fda5b596a04f918daa6",
    userOwner: {
      _id: "6372079c3c1336427bf3d32d",
      firstname: "Koizumi",
      lastname: "Ajo",
      createdAt: "2022-11-14T09:17:16.557Z",
    },
    post: "This is the test pause using req.user",
    comments: [],
    createdAt: "2022-11-17T15:14:34.250Z",
    updatedAt: "2022-11-17T15:14:34.250Z",
    __v: 0,
  },
  {
    _id: "63748d719247d90eda36b539",
    userOwner: {
      _id: "63731e4c8c29b31f81936d6d",
      firstname: "test",
      lastname: "test",
      createdAt: "2022-11-15T05:06:20.811Z",
    },
    post: "This is second test post",
    comments: [
      {
        _id: "63764c4c9a522d5d62e5e23f",
        user: {
          _id: "6372079c3c1336427bf3d32d",
          firstname: "Koizumi",
          lastname: "Ajo",
        },
        comments: "Hello, keep grinding 2",
        createdAt: "2022-11-17T14:59:24.381Z",
        updatedAt: "2022-11-17T14:59:24.381Z",
        __v: 0,
      },
    ],
    createdAt: "2022-11-16T07:12:49.737Z",
    updatedAt: "2022-11-17T15:08:13.757Z",
    __v: 0,
  },
  {
    _id: "6374ebb611d0da32e4815d09",
    userOwner: {
      _id: "63731e4c8c29b31f81936d6d",
      firstname: "test",
      lastname: "test",
      createdAt: "2022-11-15T05:06:20.811Z",
    },
    post: "Hello there2",
    comments: [
      {
        _id: "6376319552bf9b7ed63e2fc9",
        user: {
          _id: "6372079c3c1336427bf3d32d",
          firstname: "Koizumi",
          lastname: "Ajo",
        },
        comments: "Hello, Im Zuzim 2",
        createdAt: "2022-11-17T13:05:25.694Z",
        updatedAt: "2022-11-17T13:05:25.694Z",
        __v: 0,
      },
      {
        _id: "63763290f6b891b696c82a8a",
        user: {
          _id: "6372079c3c1336427bf3d32d",
          firstname: "Koizumi",
          lastname: "Ajo",
        },
        comments: "Hello, Im Zuzim 3",
        createdAt: "2022-11-17T13:09:36.247Z",
        updatedAt: "2022-11-17T13:09:36.247Z",
        __v: 0,
      },
      {
        _id: "637632d93d5bb7b21273a14b",
        user: {
          _id: "6372079c3c1336427bf3d32d",
          firstname: "Koizumi",
          lastname: "Ajo",
        },
        comments: "Hello, Im Zuzim 3",
        createdAt: "2022-11-17T13:10:49.987Z",
        updatedAt: "2022-11-17T13:10:49.987Z",
        __v: 0,
      },
    ],
    createdAt: "2022-11-16T13:55:02.533Z",
    updatedAt: "2022-11-17T14:40:49.394Z",
    __v: 0,
  },
];


export declare interface Comments {
  _id: string;
  user: {
    _id: string;
    firstname: string;
    lastname: string;
  };
  comments: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}


export declare interface User {
  _id: string;
  firstname: string;
  lastname: string;
  createdAt: string;
}


export declare interface PostProps {
  _id: string;
  userOwner: User;
  post: string;
  comments?: Comments[] | [] | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
}





