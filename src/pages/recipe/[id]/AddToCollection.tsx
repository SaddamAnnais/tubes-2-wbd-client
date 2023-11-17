import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Plus } from 'lucide-react';

const AddToCollection = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus size={18} strokeWidth={3} className="mr-2" />
          Add to Collection
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Collection</DialogTitle>
          <DialogDescription>Add this recipe to selected collection.</DialogDescription>
        </DialogHeader>
        <div className="w-full">
          <SelectForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Collection from '../../collection/page';

const FormSchema = z.object({
  id: z.string({
    required_error: 'Please select a collection.',
  }),
});

interface Collection {
  id: number;
  title: string;
}

export function SelectForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  const collections: Collection[] = [
    {
      id: 1,
      title: 'Hello',
    },
    {
      id: 2,
      title: 'Hai',
    },
    {
      id: 3,
      title: 'Ho',
    },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Collection</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={`${field.value}`}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a collection" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {collections.map((collection, idx) => {
                      return (
                        <SelectItem value={`${collection.id}`} key={idx}>
                          {collection.title}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <div className="flex justify-end items-end">
          <Button type="submit">Add to Collection</Button>
        </div>
      </form>
    </Form>
  );
}

export default AddToCollection;
