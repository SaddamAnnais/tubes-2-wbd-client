import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import AddToCollection from './AddToCollection';

const RecipeId = () => {
  const data = {
    id: 1,
    title: 'judul',
    desc: 'desc',
    difficulty: 'easy',
    tag: 'dessert',
    video_path: '/a.mp4',
    created_at: new Date(),
  };

  return (
    <main className="w-full h-full pt-32 py-8 px-20 justify-start">
      <header className="flex flex-col gap-4 items-start mb-7">
        <h1 className="font-bold text-5xl">{data.title}</h1>
        <p className="text-md">{'Posted on ' + data.created_at.toLocaleString()}</p>
      </header>
      <div className="w-full h-full flex flex-row justify-between mb-7">
        <AddToCollection />
        <Link to={`/edit/${data.id}`}>
          <Button className="rounded-full aspect-square p-1">
            <Pencil size={18} strokeWidth={3} />
          </Button>
        </Link>
      </div>

      <div className="aspect-video mb-5 w-full bg-black rounded-md z-0 flex justify-center">
        <video controls className="object-contain h-full w-full rounded-md" autoPlay>
          <source src={data.video_path} type="video/mp4" />
          Your browser doesn't support HTML5 video tag.
        </video>
      </div>
      <p className="text-md text-justify mb-5">{data.desc}</p>
      <div className="flex flex-row gap-2">
        <Badge>{data.difficulty.toUpperCase()}</Badge>
        <Badge>{data.tag.toUpperCase()}</Badge>
      </div>
    </main>
  );
};

export default RecipeId;
