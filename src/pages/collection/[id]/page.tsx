import { useLocation, useParams } from 'react-router-dom';
import RecipeCard from '../../recipe/RecipeCard';
import { useEffect, useState } from 'react';
import { useAPI } from '@/contexts';

interface collectionDetail {
  id: number;
  title: string;
  created_at: string;
  total_recipe: number;
  cover: string;
  user_id: number;
  creator_name: string;
}

interface recipe {
  id: number;
  created_at: string;
  title: string;
  desc: string;
  tag: string;
  difficulty: string;
  duration: number;
  image_path: string;
  user_id: number;
  video_path: string;
}

interface collectionRecipe {
  collectionId: number;
  recipeId: number;
  recipe: recipe;
}

const CollectionId = () => {
  const location = useLocation();
  const { id } = useParams();
  const { api } = useAPI();
  const [detail, setDetail] = useState<collectionDetail>();
  const [collectionRecipes, setCollectionRecipes] = useState<collectionRecipe[]>();

  useEffect(() => {
    const fetchDetails = async () => {
      await api
        .getCollectionDetails(id ? id : '0')
        .then((value) => {
          setDetail(value.data);
          console.log(value.data);
        })
        .catch((error) => {
          console.error('Error: ' + error);
        });
    };

    const fetchVideos = async () => {
      await api
        .getCollectionRecipes(id ? id : '0')
        .then((value) => {
          setCollectionRecipes(value.data);
          console.log(value.data);
        })
        .catch((error) => {
          console.error('Error: ' + error);
        });
    };

    fetchDetails();
    fetchVideos();
  }, [location.pathname, api, id]);

  return (
    <main className="w-full h-full flex flex-row pt-28 py-8 px-20">
      <div className="w-1/2 h-full justify-center items-center mx-2">
        <p className="text-2xl font-semibold mb-4">{detail?.title}</p>
        <img className="h-[20rem] w-full object-cover" src={detail?.cover} alt="cat" />
        <p className="text-xl font-medium mt-4">Collection made by {detail?.creator_name}</p>
        <p className="text-xl font-medium mt-2">
          Created at: {detail ? new Date(detail.created_at).toLocaleDateString() : new Date().toLocaleDateString()}
        </p>
        <p className="text-xl font-medium mt-2">
          {detail?.total_recipe ? detail.total_recipe + ' Videos' : 'No Video'}
        </p>
      </div>
      <div className="w-1/2 h-[41rem] overflow-auto grid grid-cols-2 gap-2 mx-2">
        {/* iterate  */}
        {collectionRecipes?.map((collectionRecipe, index) => {
          return (
            <RecipeCard
              key={index}
              recipe_name={collectionRecipe.recipe.title}
              created_at={new Date(collectionRecipe.recipe.created_at)}
              recipe_id={collectionRecipe.recipeId}
              cover={collectionRecipe.recipe.image_path}
              duration={collectionRecipe.recipe.duration}
              tag={collectionRecipe.recipe.tag}
              difficulty={collectionRecipe.recipe.difficulty}
            />
          );
        })}
      </div>
    </main>
  );
};

export default CollectionId;
