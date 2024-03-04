import React from "react";
import { useEffect, useState } from "react";
import  Axios from "axios";

const API =import.meta.env.VITE_APP_API_URL

export default function RecipeIndex() {
   const [allRecipes, setAllRecipes] = useState
   ([])
   
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
        <div className="recipeIndex">
            {/* Content of RecipeIndex component */}
        </div>
    );
};