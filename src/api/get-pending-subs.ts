import { APIInstance } from '.';

const getPendingSubsAPI = async () => {
  const res = await APIInstance.get('/subscription');
  return res.data;
};

export default getPendingSubsAPI;
