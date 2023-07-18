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

export interface postSuccess {
  success: boolean;
  message?: string;
  data?: Post;
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

export interface GetAPost {
  success: boolean;
  data?: Post;
}

export interface CommentsResult {
  success: boolean;
  data?: Comment[];
}

export interface Comment {
  _id: string;
  commentFromPostWithIdentifier: string;
  content: string;
  commenterID: string;
  commentDate: string;
}

export interface User {
  _id: string;
  name: {
    first: string;
    last: string;
  };
  location: string;
  picture: string;
  joined: string;
  work: string;
  description: string;
  login?: LoginData;
}

export interface Post {
  _id: string;
  postTitle: string;
  postBody: string;
  postImg: string;
  postDate: string;
  postOwner: string;
  hashtags: Hashtags;
  likes: number;
  bookmarks: number;
  isRelevant: boolean;
}

interface Hashtags {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export interface PostSubmit {
  postTitle: string;
  postBody: string;
  postImg: string;
  hashtags: Hashtags;
}

export interface CommentSubmit {
  content: string;
}

export interface CommentSuccess {
  success: boolean;
  message?: string;
}

export interface DeleteSuccess {
  success: boolean;
  message?: string;
}
