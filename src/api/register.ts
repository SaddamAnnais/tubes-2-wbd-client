import { APIInstance } from '.';

const registerAPI = async (username: string, name: string, password: string) => {
  const res = await APIInstance.post('/register', { username, name, password });
  return res.data;
};

export default registerAPI;
