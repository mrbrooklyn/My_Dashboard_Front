import type { ApiResponse } from "~/types/response";

export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  email: string;
  password: string;
  confirm_password: string;
}

export interface UpdateProfileForm {
  email?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
}

export interface ChangePasswordForm {
  old_password: string;
  new_password: string;
  confirm_new_password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  first_name?: string;
  last_name?: string;
  email: string;
  phone?: string;
  password: string;
}

export interface UpdateProfilePayload {
  first_name?: string;
  last_name?: string;
  phone?: string;
}

export interface ChangePasswordPayload {
  old_password: string;
  new_password: string;
}

export interface UserProfile {
  _id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserProfileList {
  user: UserProfile;
  access_token: string;
}

export interface UserProfileListResponse extends ApiResponse<UserProfileList> {}
export interface ProfileResponse extends ApiResponse<UserProfile> {}
export interface TokenResponse extends ApiResponse<{ access_token: string }> {}