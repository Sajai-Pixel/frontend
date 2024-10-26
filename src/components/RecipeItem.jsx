import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeItem = () => {
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        
        const result = await axios.get('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=43c4ff26-6bdb-4866-ac37-d5bb9c59918d');
        
        const recipes = result.data.data.recipes;

        const detailedRecipes = await Promise.all(
          recipes.map(async (recipe) => {
            const details = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${recipe.id}?key=43c4ff26-6bdb-4866-ac37-d5bb9c59918d`);
            return details.data.data.recipe; 
          })
        );

        setAllRecipes(detailedRecipes); 
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <>
      {allRecipes.map((recipe) => (
        <div className="bg-blue-50 rounded-xl p-4 shadow-lg" key={recipe.id}>
          <div className="relative">
            <img
              src={recipe?.image_url}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <span className="absolute top-2 right-2 h-8 w-8 flex items-center justify-center bg-white p-2 rounded-full shadow-md">
              <i className="fa-regular fa-heart text-gray-700"></i>
            </span>
          </div>

          <div className="mt-4 space-y-2">
            <h2 className="text-lg font-semibold text-gray-900">
              {recipe.title}
            </h2>

            <div className="flex items-center gap-4 text-gray-600 text-sm">
              <div className="flex items-center gap-1">
                <i className="fa-solid fa-clock"></i>
                <span>{recipe.cooking_time} minutes</span>
              </div>
              <div className="flex items-center gap-1">
                <i className="fa-solid fa-utensils"></i>
                <span>{recipe.servings} Servings</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecipeItem;
