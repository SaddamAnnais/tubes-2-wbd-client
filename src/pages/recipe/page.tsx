import RecipeCard from './RecipeCard';

const Recipe = () => {
  // TO BE DELETED
  const componentArray = new Array(8).fill(null);

  return (
    <main className={'w-full h-full pt-32 py-8 px-20'}>
      <h1 className="text-4xl font-bold text-left">Your Premium Recipes!</h1>
      <div className="grid grid-cols-4 gap-2 mt-6">
        {componentArray.map((_, index) => {
          return (
            <RecipeCard
              key={index}
              recipe_name="test recipe title"
              created_at={new Date()}
              recipe_id={1}
              cover={
                'https://www.fourpaws.com/-/media/Project/OneWeb/FourPaws/Images/articles/cat-corner/small-cat-breeds/munchkin-cropped.jpg'
              }
              duration={5}
              tag='appetizer'
              difficulty='easy'
            />
          );
        })}
      </div>
    </main>
  );
};

export default Recipe;
