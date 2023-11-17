import { APIInstance } from ".";

import { RecipeData } from "@/lib/types";

const addRecipeAPI = async (recipe: RecipeData) => {
    let formData = new FormData();

    // working
    formData.append('title', recipe.title)
    formData.append('desc', recipe.description)
    formData.append('difficulty', recipe.diff)
    formData.append('tag', recipe.tag)
    formData.append('video', recipe.video)
    formData.append('image', recipe.image)

    const res = await APIInstance.post<Response>('/recipe', formData);
    return res.data;
}

export default addRecipeAPI;