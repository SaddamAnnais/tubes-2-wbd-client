import { APIInstance } from '.';

const getCollectionRecipesAPI = async (id: string) => {
  const res = await APIInstance.get('/collection/' + id + '/recipes');
  return res.data;
};

export default getCollectionRecipesAPI;
