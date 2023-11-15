export type LoginData = {
  token: string;
};

export type Response<T> = {
  status: boolean;
  message: string;
  data: T;
};

export type User = {
  id: number;
  username: string;
  name: string;
  isAdmin: boolean;
};
