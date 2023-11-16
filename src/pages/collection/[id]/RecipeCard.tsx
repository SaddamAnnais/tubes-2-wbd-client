import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';

interface RecipeCardProps {
  recipe_id : number;
  recipe_name: string;
  created_at: Date;
  cover: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe_id, recipe_name, created_at, cover }) => {
  return (
    <NavLink to={'/recipe/' + recipe_id}>
      <Card className="w-full hover:bg-secondary">
        <CardHeader className="w-full h-40 m-0 p-3 mb-2">
          <img
            className="w-full h-full rounded-md object-cover"
            src={cover}
            alt="cat"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-left mb-2">{recipe_name}</CardTitle>
          <CardDescription className="flex flex-row justify-between">
            <p>{created_at.toLocaleDateString()}</p>
          </CardDescription>
        </CardContent>
      </Card>
    </NavLink>
  );
};

export default RecipeCard;
