import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';

interface CollectionCardProps {
  title: string;
  total_recipe: number;
  created_at: Date;
  collection_id: number;
  cover: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ title, total_recipe, created_at, collection_id, cover }) => {
  return (
    <NavLink to={'./' + collection_id}>
      <Card className="w-full hover:bg-secondary h-64">
        <CardHeader className="w-full h-40 m-0 p-3 mb-2">
          <img className="w-full h-full rounded-md object-cover" src={cover} alt="cat" />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-left mb-2 text-xl">{title}</CardTitle>
          <CardDescription className="flex flex-row justify-between">
            <p>{total_recipe ? `${total_recipe} Videos` : 'No Video'} </p>
            <p>{created_at.toLocaleDateString()}</p>
          </CardDescription>
        </CardContent>
      </Card>
    </NavLink>
  );
};

export default CollectionCard;
