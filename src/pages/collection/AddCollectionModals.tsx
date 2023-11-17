import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAPI } from '@/contexts';
// import axios from 'axios';
import { X } from 'lucide-react';
import { MouseEvent, useRef, useState } from 'react';

interface AddCollectionModalsProps {
  isModalsOpen: boolean;
  setIsModalsOpen: (value: boolean) => void;
}

const AddCollectionModals: React.FC<AddCollectionModalsProps> = ({ isModalsOpen, setIsModalsOpen }) => {
  const newCollectionNameRef = useRef<HTMLInputElement>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const { api } = useAPI();

  const createCollectionHandler = async () => {
    if (newCollectionNameRef.current) {
      if (newCollectionNameRef.current.value.trim().length != 0) {
        const inputValue = newCollectionNameRef.current.value;
        await api
          .createCollection(inputValue)
          .then(() => {
            if (newCollectionNameRef.current) newCollectionNameRef.current.value = '';
            setErrorMsg('');
            setIsModalsOpen(false);
          })
          .catch((error) => {
            setErrorMsg('Error: ' + error);
          });
      }
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
          {errorMsg && <p className="text-red-700 text-lg font-medium mt-2">{errorMsg}</p>}
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
