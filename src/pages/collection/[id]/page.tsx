import { useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const CollectionId = () => {
  const { id } = useParams();

  // TODO: FETCH HERE

  const playlist_title = 'title collection for id: ' + id;
  const total_video = 3;
  const username = 'Pak Gembus';
  const date_created = new Date();
  const cover =
    'https://www.fourpaws.com/-/media/Project/OneWeb/FourPaws/Images/articles/cat-corner/small-cat-breeds/munchkin-cropped.jpg';

  // TO BE DELETED
  const componentArray = new Array(12).fill(null);

  return (
    <main className="w-full h-full flex flex-row pt-28 py-8 px-20">
      <div className="w-1/2 h-full justify-center items-center mx-2">
        <p className="text-2xl font-semibold mb-4">{playlist_title}</p>
        <img className="h-[20rem] w-full object-cover" src={cover} alt="cat" />
        <p className="text-xl font-medium mt-4">Collection made by {username}</p>
        <p className="text-xl font-medium mt-2">Created at: {date_created.toDateString()}</p>
        <p className="text-xl font-medium mt-2">{total_video ? total_video + ' Videos' : 'No Video'}</p>
      </div>
      <div className="w-1/2 h-[41rem] overflow-auto grid grid-cols-2 gap-2 mx-2">
        {/* iterate  */}
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
            />
          );
        })}
      </div>
    </main>
  );
};

export default CollectionId;
