export interface APIResponse {
  data?: object;
  response?: object;
}

export interface AxiosAPI {
  get(path): Promise<APIResponse>;
}
