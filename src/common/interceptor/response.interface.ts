export interface Response<T> {
  status?: number; // HTTP status code
  message?: string; // Message from the server
  data: T; // The actual data returned by the controller
  count?: number; // Option
}
