import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link, useParams } from 'react-router-dom';
import AddToCollection from './AddToCollection';
import { useAPI } from '@/contexts';
import { useEffect, useState } from 'react';

interface Recipe {
  id: number;
  title: string;
  desc: string;
  difficulty: string;
  tag: string;
  created_at: Date;
}

const RecipeId = () => {
  const { id } = useParams();
  const { api } = useAPI();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [videoURL, setVideoURL] = useState<string | null>(null);

  const fetch = async () => {
    const detail = await api.getRecipe(id!);
    const video = await api.getRecipeVideo(id!);
    if (!detail.data || !video) {
      return;
    }

    setRecipe(detail.data);
    setVideoURL(window.URL.createObjectURL(video));
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    recipe &&
    videoURL && (
      <main className="w-full h-full pt-32 py-8 px-10 sm:px-20 justify-start">
        <header className="flex flex-col gap-4 items-start mb-7">
          <h1 className="font-bold text-5xl">{recipe.title}</h1>
          <p className="text-md">{'Posted on ' + new Date(recipe.created_at).toLocaleString()}</p>
        </header>
        <div className="w-full h-full flex flex-row justify-between mb-7">
          <AddToCollection />
          <Link to={`/edit/${recipe.id}`}>
            <Button className="rounded-full aspect-square p-1">
              <Pencil size={18} strokeWidth={3} />
            </Button>
          </Link>
        </div>

        <div className="aspect-video mb-5 w-full bg-black rounded-md z-0 flex justify-center">
          <video controls className="object-contain h-full w-full rounded-md" autoPlay>
            <source src={videoURL} />
            Your browser doesn't support HTML5 video tag.
          </video>
        </div>
        <p className="text-md text-justify mb-5">{recipe.desc}</p>
        <div className="flex flex-row gap-2">
          <Badge>{recipe.difficulty.toUpperCase()}</Badge>
          <Badge>{recipe.tag.toUpperCase()}</Badge>
        </div>
      </main>
    )
  );
};

export default RecipeId;
