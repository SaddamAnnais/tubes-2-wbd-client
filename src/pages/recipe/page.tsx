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
  // TO BE DELETED
  const { api } = useAPI();
  const [componentArray, setComponentArray] = useState<Recipe[]>([]);
  // const componentArray = new Array(8).fill(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      await api
        .getRecipes()
        .then((value) => {
          const arrCollection: Recipe[] = value.data;
          setComponentArray(arrCollection);
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
        {componentArray.map((arr, index) => {
          return (
            <RecipeCard
              key={index}
              recipe_name={arr.title}
              created_at={new Date(arr.created_at)}
              recipe_id={arr.id}
              cover={arr.image_path}
              duration={arr.duration}
              tag={arr.tag}
              difficulty={arr.difficulty}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Recipe;
