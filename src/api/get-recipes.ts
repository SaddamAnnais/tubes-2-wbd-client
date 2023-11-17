import { APIInstance } from '.';

const getRecipesAPI = async () => {
  const res = await APIInstance.get('/recipe/');
  return res.data;
};

export default getRecipesAPI;
