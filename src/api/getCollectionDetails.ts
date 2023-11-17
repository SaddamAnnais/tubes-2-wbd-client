import { APIInstance } from '.';

const getCollectionDetailsAPI = async (id: string) => {
  const res = await APIInstance.get('/collection/' + id);
  return res.data;
};

export default getCollectionDetailsAPI;
