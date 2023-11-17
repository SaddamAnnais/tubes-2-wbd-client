import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import CollectionCard from './CollectionCard';
import { useState, useEffect } from 'react';
import AddCollectionModals from './AddCollectionModals';
import { useAPI } from '@/contexts';

interface Collection {
  id: number;
  title: string;
  created_at: string;
  total_recipe: number;
  cover: string;
  user_id: number;
  creator_name: string;
}

const Collection = () => {
  const { api } = useAPI();
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [componentArray, setComponentArray] = useState<Collection[]>([]);

  useEffect(() => {
    const fetchCollections = async () => {
      await api
        .getCollections()
        .then((value) => {
          const arrCollection: Collection[] = value.data;
          setComponentArray(arrCollection);
        })
        .catch((error) => {
          setErrorMsg('Error: ' + error);
        });
    };
    fetchCollections();
  }, [isModalsOpen]);

  return (
    <main className={`w-full h-full pt-28 py-8 px-20 ${isModalsOpen ? 'fixed' : ''} `}>
      <AddCollectionModals isModalsOpen={isModalsOpen} setIsModalsOpen={setIsModalsOpen} />
      <header className="flex flex-row justify-between mb-8">
        <h1 className="font-bold text-5xl">My Collection</h1>
        <Button
          className="text-lg"
          onClick={() => {
            setIsModalsOpen(true);
          }}
        >
          <Plus className="mr-2" /> New
        </Button>
      </header>
      {errorMsg && <p className="text-red-700 mt-20">{errorMsg}</p>}
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {!errorMsg &&
          componentArray.length != 0 &&
          componentArray.map((collection) => {
            const date = new Date(collection.created_at);
            return (
              <CollectionCard
                key={collection.id}
                title={collection.title}
                total_recipe={collection.total_recipe}
                created_at={date}
                collection_id={collection.id}
                cover={collection.cover}
              />
            );
          })}
      </div>
    </main>
  );
};

export default Collection;
