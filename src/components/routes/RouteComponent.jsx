import { Routes,Route } from "react-router-dom"
import Home from "../../pages/Home.jsx"
import New from "../../pages/New.jsx"
import Edit from "../../pages/Edit.jsx"
import Show from "../../pages/Show.jsx"
import Error from "../../pages/Error.jsx"
import Recipes from "../../pages/Recipes.jsx"

// Functional component named RouteComponent
export default function RouteComponent() {
    return (
     
            <Routes>

                <Route path="/" element = { <Home /> } />
                
                <Route path="/recipes" element = { <Recipes />}/> //all recipes 
            
                <Route path="/recipes/:recipeID" element = { <Show />} />   //to obtain 1 id 
            
                <Route path= "/recipes/new" element = { <New />} />



            </Routes>

    
    
    )
}
