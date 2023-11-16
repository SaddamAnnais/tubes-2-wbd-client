import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';
import { MouseEvent, useRef } from 'react';

interface AddCollectionModalsProps {
  isModalsOpen: boolean;
  setIsModalsOpen: (value: boolean) => void;
}

const AddCollectionModals: React.FC<AddCollectionModalsProps> = ({ isModalsOpen, setIsModalsOpen }) => {
  const newCollectionNameRef = useRef<HTMLInputElement>(null);

  const createCollectionHandler = () => {
    // TODO: handler for creating a new collection
    const inputValue = newCollectionNameRef.current?.value;
    console.log('Input value:', inputValue);
    setIsModalsOpen(false);
    if (newCollectionNameRef.current) {
      newCollectionNameRef.current.value = '';
    }
  };

  const closeModals = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      setIsModalsOpen(false);
      if (newCollectionNameRef.current) {
        newCollectionNameRef.current.value = '';
      }
    }
  };

  return (
    <div
      className={`w-screen h-screen fixed z-50 flex justify-center items-center bg-primary/50 top-0 left-0 ${
        isModalsOpen ? '' : 'hidden'
      }`}
      onClick={(e) => {
        closeModals(e);
      }}
    >
      <Card className="w-1/2 bg-primary-foreground rounded-lg divide-y-2">
        <CardHeader className="flex flex-row justify-between px-6 py-4 items-center ">
          <CardTitle className="text-2xl font-semibold">Add New Collection</CardTitle>
          <Button
            size="icon"
            onClick={() => {
              setIsModalsOpen(false);
            }}
          >
            <X />
          </Button>
        </CardHeader>
        <CardContent className="w-full pt-4">
          <Label htmlFor="collection-name" className="ml-2 text-xl text-left w-full block">
            Collection Title
          </Label>
          <Input id="collection-name" className="mt-2 text-base" ref={newCollectionNameRef} />
        </CardContent>
        <CardFooter className="flex flex-row justify-end gap-3 py-4">
          <Button
            variant="outline"
            onClick={() => {
              setIsModalsOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button onClick={createCollectionHandler}>Create</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddCollectionModals;
