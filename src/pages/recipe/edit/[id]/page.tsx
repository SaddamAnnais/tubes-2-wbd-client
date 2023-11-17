import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import { RecipeData, Response } from '@/lib/types';

import { useAPI } from '@/contexts';

import { useState } from 'react';
import { useParams } from 'react-router';

import { useEffect } from 'react';

interface Recipe {
  id: number;
  title: string;
  desc: string;
  difficulty: string;
  tag: string;
  created_at: Date;
}

const RecipeEdit = () => {
  const { api } = useAPI();
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [videoURL, setVideoURL] = useState<string | null>(null);

  const [image, setImage] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  

  
  const fetch = async () => {
    const detail = await api.getRecipe(id!);
    const video = await api.getRecipeVideo(id!);
    if (!detail.data || !video) {
      return;
    }
  

    setRecipe(detail.data);
    setVideoURL(window.URL.createObjectURL(video));


    // set initial edit data
    setFormData({
        title: recipe!.title,
        desc: recipe!.desc,
        difficulty: recipe!.difficulty,
        tag: recipe!.tag,
    })
  }

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const [formData, setFormData] = useState<RecipeData>({
    title: '',
    desc: '',
    difficulty: '',
    tag: '',
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // console.log(formData);
  };

  const onChangeRadio = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    // console.log(formData);
  };

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.name === 'video'
    ?
    setVideo(e.target.files![0])
    :
    setImage(e.target.files![0])
  };

  const editRecipeHandler = async (formData: RecipeData) => {
    
    if (
      formData.title == '' ||
      formData.desc == '' ||
      formData.difficulty == '' ||
      formData.tag == '' ||
      video == null ||
      image == null
    ) {
      console.log("Data is not complete")
      return;
    }

    const res = await api.editRecipe(id!, formData, video, image);

    // do something about the response
    //    and redirect maybe?
  };

  return (
    <div className="w-full h-[80vh] grid grid-cols-2 pt-28">
      <div className="grid w-full items-center gap-4 px-24">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="title" className="text-left">
            Title
          </Label>
          <Input value={formData.title} onChange={onChangeInput} name="title" placeholder="ex: Ayam Bakar Madu" />
        </div>
        <div className="flex flex-col space-y-1.5 ">
          <Label htmlFor="desc" className="text-left">
            Description
          </Label>
          <Textarea
            value={formData.desc}
            onChange={onChangeInput}
            name="desc"
            placeholder="ex: Resep terbaru ayam bakar madu"
            className=" min-h-[8rem] align-top resize-none px-2"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="difficulty" className="text-left">
            Difficulty
          </Label>
          <RadioGroup
            name="diff"
            defaultValue="easy"
            className="w-1/2 flex justify-between"
            onValueChange={(val) => {
              onChangeRadio('difficulty', val);
            }}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="easy" id="diff-easy" className="peer sr-only" />
              <Label
                htmlFor="diff-easy"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                Easy
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="diff-medium" className="peer sr-only" />
              <Label
                htmlFor="diff-medium"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                Medium
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hard" id="diff-hard" className="peer sr-only" />
              <Label
                htmlFor="diff-hard"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                Hard
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="tag" className="text-left">
            Tag
          </Label>
          <RadioGroup
            name="tag"
            defaultValue="appetizer"
            className="w-4/5 flex justify-between"
            onValueChange={(val) => {
              onChangeRadio('tag', val);
            }}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="appetizer" id="tag-appetizer" className="peer sr-only" />
              <Label
                htmlFor="tag-appetizer"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                Appetizer
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="maincourse" id="tag-maincourse" className="peer sr-only" />
              <Label
                htmlFor="tag-maincourse"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                Main Course
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dessert" id="tag-dessert" className="peer sr-only" />
              <Label
                htmlFor="tag-dessert"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                Dessert
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="fullcourse" id="tag-fullcourse" className="peer sr-only" />
              <Label
                htmlFor="tag-fullcourse"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                Full Course
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="grid w-full items-center gap-4 px-24">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="video" className="text-left">
            Video
          </Label>
          <Input onChange={onChangeFile} name="video" type="file" accept="video/mp4" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="image" className="text-left">
            Image
          </Label>
          <Input onChange={onChangeFile} name="image" type="file" accept="image/*" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Button onClick={() => {
            editRecipeHandler({
              title: formData.title,
              desc: formData.desc,
              difficulty: formData.difficulty,
              tag: formData.tag,
              video_path: formData.video_path,
              image_path: formData.image_path,
            });
          }}>
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecipeEdit;
