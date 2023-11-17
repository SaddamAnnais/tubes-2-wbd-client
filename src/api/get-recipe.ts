import { APIInstance } from '.';

const getRecipeAPI = async (id: string) => {
  const res = await APIInstance.get('/recipe/details/' + id);
  return res.data;
};

export default getRecipeAPI;
