import { APIInstance } from '.';

const selfAPI = async () => {
  const res = await APIInstance.get('/self');
  return res.data;
};

export default selfAPI;
