import { APIInstance } from '.';

import { RecipeData, Response } from '@/lib/types';

const getRecipeByIdAPI = async (id: string) => {
  const res = await APIInstance.put<Response<RecipeData>>('/recipe/details/' + id);
  return res.data;
};

export default getRecipeByIdAPI;