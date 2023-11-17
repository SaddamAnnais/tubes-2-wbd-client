import { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import { useAPI } from '@/contexts';

interface Recipe {
  id: number;
  title: string;
  desc: string;
  tag: string;
  difficulty: string;
  video_path: number;
  duration: number;
  image_path: string;
  created_at: string;
}

const Recipe = () => {
  const { api } = useAPI();
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      await api
        .getRecipes()
        .then((value) => {
          const arrCollection: Recipe[] = value.data;
          setRecipes(arrCollection);
        })
        .catch(() => {
          // setErrorMsg('Error: ' + error);
        });
    };
    fetchRecipes();
  }, [api]);

  return (
    <main className={'w-full h-full pt-32 py-8 px-20'}>
      <h1 className="text-4xl font-bold text-left">Your Premium Recipes!</h1>
      <div className="grid grid-cols-4 gap-2 mt-6">
        {recipes.map((recipe, index) => {
          return (
            <RecipeCard
              key={index}
              recipe_name={recipe.title}
              created_at={new Date(recipe.created_at)}
              recipe_id={recipe.id}
              cover={recipe.image_path}
              duration={recipe.duration}
              tag={recipe.tag}
              difficulty={recipe.difficulty}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Recipe;
