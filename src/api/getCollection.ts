import { APIInstance } from '.';

const getCollectionAPI = async () => {
  const res = await APIInstance.get('/collection');
  return res.data;
};

export default getCollectionAPI;
