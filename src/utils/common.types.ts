export interface LoginData {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  message: string;
  //   success: boolean;
  //   data: string;
}
