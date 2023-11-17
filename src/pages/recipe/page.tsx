import RecipeCard from './RecipeCard';

import { useAPI } from '@/contexts';

import { useState, useEffect } from 'react';

interface Recipe {
  id: number;
  title: string;
  desc: string;
  difficulty: string;
  tag: string;
  video_path: string;
  duration: number;
  image_path: string;
  created_at: Date;
}

const Recipe = () => {
  const { api } = useAPI();
  const [recipes, setRecipes] = useState<Recipe[]>([])

  // TO BE DELETED
  // const componentArray = new Array(8).fill(null);

  const fetch = async () => {
    const recipes = await api.getRecipes();
    if (!recipes.data) {
      return;
    }

    setRecipes(recipes.data);
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={'w-full h-full pt-32 py-8 px-20'}>
      <h1 className="text-4xl font-bold text-left">Your Premium Recipes!</h1>
      <div className="grid grid-cols-4 gap-2 mt-6">
        {/* {componentArray.map((_, index) => { */}
        { recipes.map((recipe, index) => 
          {
          return (
            <RecipeCard
              key={index}
              recipe_name={recipe.title}
              created_at={recipe.created_at}
              recipe_id={recipe.id}
              cover={
                recipe.image_path
              }
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
