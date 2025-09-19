import type { ApiResponse } from "~/types/response";

export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserProfile {
  _id?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  access_token?: string;
}

export interface UserProfileResponse extends ApiResponse<UserProfile> {}
