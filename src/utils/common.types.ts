export interface LoginData {
  username: string;
  password: string;
}

export interface AuthResponse {
  //   token: string;
  //   message: string;
  success: boolean;
  data?: string;
  message?: string;
}

export interface Token {
  id: string;
}

export interface PostResult {
  success: boolean;
  data?: Post[];
}

export interface UserResult {
  success: boolean;
  data?: User;
}

export interface User {
  _id: string;
  name: {
    first: string;
    last: string;
  };
  location: string;
  picture: string;
  joined: number;
  work: string;
  description: string;
}

export interface Post {
  _id: string;
  postTitle: string;
  postBody: string;
  postImg: string;
  postDate: string;
  postOwner: string;
  hashtags: Hashtags;
}

interface Hashtags {
  first: string;
  second: string;
  third: string;
  fourth: string;
}
