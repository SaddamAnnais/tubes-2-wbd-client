import { APIInstance } from '.';

const getRecipeVideoAPI = async (id: string) => {
  const res = await APIInstance.get('/recipe/video/' + id, {
    responseType: 'blob',
    headers: { Accept: 'video/mp4' },
  });
  return res.data;
};

export default getRecipeVideoAPI;
