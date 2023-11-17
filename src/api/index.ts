import axios from 'axios';
import loginAPI from './login';
import registerAPI from './register';
import selfAPI from './self';
import collectionAPI from './getCollection';
import createCollectionAPI from './createCollection';
import getCollectionDetailsAPI from './getCollectionDetails';
import getCollectionRecipesAPI from './getCollectionRecipes';

import addRecipeAPI from './add-recipe';
import getRecipeAPI from './get-recipe';
import getRecipeVideoAPI from './get-recipe-video';
import addToCollectionAPI from './add-to-collection';
import editRecipeAPI from './edit-recipe';
import getPendingSubsAPI from './get-pending-subs';
import approveSubscriptionAPI from './approve-subscription';
import rejectSubscriptionAPI from './reject-subscription';
import getRecipesAPI from './get-recipes';

const APIInstance = axios.create();
APIInstance.defaults.baseURL = import.meta.env.VITE_REST_URL;

const API = {
  login: loginAPI,
  register: registerAPI,
  self: selfAPI,
  getCollections: collectionAPI,
  createCollection: createCollectionAPI,
  getCollectionDetails: getCollectionDetailsAPI,
  getCollectionRecipes: getCollectionRecipesAPI,
  addRecipe: addRecipeAPI,
  getRecipe: getRecipeAPI,
  getRecipes: getRecipesAPI,
  getRecipeVideo: getRecipeVideoAPI,
  addToCollection: addToCollectionAPI,
  editRecipe: editRecipeAPI,
  getPendingSubs: getPendingSubsAPI,
  approveSubscription: approveSubscriptionAPI,
  rejectSubscription: rejectSubscriptionAPI,
};

for (const key in API) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const func = API[key as keyof typeof API] as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  API[key as keyof typeof API] = async (...args: any[]) => {
    try {
      const res = await func(...args);

      // NOTE: later check the result
      console.log(res, res.status);

      if (res.status === false) {
        throw new Error(res.message);
      }

      return res;
    } catch (err) {
      console.error(err);

      if (err instanceof Error) {
        return {
          status: false,
          message: err.message,
        };
      }

      return {
        status: false,
        message: 'Unknown error',
      };
    }
  };
}

type APIType = typeof API;
export { APIInstance, type APIType, API };
