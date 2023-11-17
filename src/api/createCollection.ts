import { APIInstance } from '.';

const createCollectionAPI = async (collection_title: string) => {
  const res = await APIInstance.post('/collection', { title: collection_title });
  return res.data;
};

export default createCollectionAPI;
