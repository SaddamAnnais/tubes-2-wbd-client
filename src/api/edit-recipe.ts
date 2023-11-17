import { APIInstance } from '.';

import { RecipeData, Response } from '@/lib/types';

const editRecipeAPI = async (id: string, recipe: RecipeData, video: File, image: File) => {
  const formData = new FormData();

  // working
  formData.append('title', recipe.title);
  formData.append('desc', recipe.desc);
  formData.append('difficulty', recipe.difficulty);
  formData.append('tag', recipe.tag);
  formData.append('files', video);
  formData.append('files', image);

  const res = await APIInstance.put('/recipe/' + id, formData);
  return res.data;
};

export default editRecipeAPI;