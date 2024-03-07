import React from "react";
import RecipeIndex from "../components/recipeIndex/RecipeIndex"
import { useEffect, useState } from "react";
import  axios from "axios"

const API =import.meta.env.VITE_APP_API_URL

function RecipeIndex() {
   const [allRecipes, setAllRecipes] = useState ([])
   
   // Function to fetch all recipes
    function getAllRecipes() {
        axios.get(`${API}/recipes`)
            .then(res => {
                setAllRecipes(res.data); // Assuming the response contains data in an array format
            })
            .catch(error => {
                console.error('Error fetching recipes:', error);
            });
    }

    // UseEffect to fetch recipes when the component mounts
    useEffect(() => {
        getAllRecipes();
    }, []); // Passing an empty dependency array ensures that this effect runs only once after the component mounts

    return (
        <>

      <div className="recipeIndex">
        <h2>Check All Recipes </h2>
            {
                allRecipes.map(recipeObj => recipeObj.recipe_name)
            }        

</div>
</>
)
 }
export default RecipeIndex