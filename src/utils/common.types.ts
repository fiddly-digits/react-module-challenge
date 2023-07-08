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

export interface UserInfo {
  id: string;
}
