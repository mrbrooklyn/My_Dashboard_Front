export interface ApiResponse<T> {
  status_code?: number;
  is_success?: boolean;
  data?: T;
  error?: null | string;
  message?: null | string;
}
