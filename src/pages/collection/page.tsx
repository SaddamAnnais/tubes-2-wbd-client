import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';
import CollectionCard from './CollectionCard';
import { MouseEvent, useState } from 'react';

const Collection = () => {
  const [addCollectionModals, setAddCollectionModals] = useState(false);

  const closeCollectionModals = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      setAddCollectionModals(false);
    }
  };

  return (
    <main className={`w-full h-full pt-28 py-8 px-20 ${addCollectionModals ? 'overflow-hidden max-h-screen' : ''} `}>
      <div
        className={`w-screen h-screen fixed z-50 flex justify-center items-center bg-primary/50 top-0 left-0 ${
          addCollectionModals ? '' : 'hidden'
        }`}
        onClick={(e) => {
          closeCollectionModals(e);
        }}
      >
        <div className="w-1/2 h-1/2 bg-primary-foreground rounded-lg">
          <div className="flex flex-row justify-between px-6 py-4">
            <p className="text-2xl font-semibold">Add New Playlist</p>
            <Button
              size="icon"
              onClick={() => {
                setAddCollectionModals(false);
              }}
            >
              <X />
            </Button>
          </div>
        </div>
      </div>
      <header className="flex flex-row justify-between mb-8">
        <h1 className="font-bold text-5xl">My Collection</h1>
        <Button
          className="text-lg"
          onClick={() => {
            setAddCollectionModals(true);
          }}
        >
          <Plus className="mr-2" /> New
        </Button>
      </header>
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* iterate  */}
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
        <CollectionCard title="test title" total_recipe={10} created_at={new Date()} collection_id={1} />
      </div>
    </main>
  );
};

export default Collection;
