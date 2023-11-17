import { APIInstance } from '.';

const addToCollectionAPI = async (collecId: string, recipeId: string) => {
  const res = await APIInstance.post('/collection/' + collecId, { recipe_id: recipeId });
  return res.data;
};

export default addToCollectionAPI;
