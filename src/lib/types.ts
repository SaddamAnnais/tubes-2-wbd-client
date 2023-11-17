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

export type RecipeData = {
    title: string,
    desc: string,
    difficulty: string,
    tag: string,
    video_path?: string,
    image_path?: string,
}
