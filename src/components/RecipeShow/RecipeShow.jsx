import { useParams } from "react-router-dom"
import { useEffect, useState} from "react"
import axios from "axios"

const API = import.meta.env.VITE_APP_API_URL

function recipeShow() {
    const [allRecipes, setAllRecipes] = useState({})

    const { id } = useParams

    useEffect(() => {
        axios.get(`${API}/recipes/${id}`)
            .then(res => allRecipes(res.data))
            .catch(error => console.log(error))
    }, [id])
    
    return (
        <div className="recipeShow">
            <h2>{allRecipes.recipe_name}</h2>
            <span>{allRecipes.creation_date}</span>
            <span>{allRecipesllRecipes.vegan}</span>
            <span>{allRecipesllRecipes.recipe_type}</span>
            <div/>
    )
    
    


</div>
    )
}

export default recipeShow
