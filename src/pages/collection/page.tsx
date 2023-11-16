import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import CollectionCard from './CollectionCard';
import { useState } from 'react';
import AddCollectionModals from './AddCollectionModals';

const Collection = () => {
  const [isModalsOpen, setIsModalsOpen] = useState(false);

  // TO BE DELETED
  const componentArray = new Array(12).fill(null);

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
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {/* iterate  */}
        {componentArray.map((_, index) => {
          return <CollectionCard key={index} title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />;
        })}
      </div>
    </main>
  );
};

export default Collection;
