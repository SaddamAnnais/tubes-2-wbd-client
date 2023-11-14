import { LoginData, Response } from '@/lib/types';
import { APIInstance } from '.';

const loginAPI = async (username: string, password: string) => {
  const res = await APIInstance.post<Response<LoginData>>('/login', { username, password });
  return res.data;
};

export default loginAPI;
