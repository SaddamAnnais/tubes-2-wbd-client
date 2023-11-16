import { APIInstance } from '.';

const collectionAPI = async () => {
  const res = await APIInstance.get('/collection');
  return res.data;
};

export default collectionAPI;
