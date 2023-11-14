export type LoginData = {
  token: string;
};

export type Response<T> = {
  status: boolean;
  message: string;
  data: T;
};
