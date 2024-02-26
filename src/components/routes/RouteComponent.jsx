import { Routes,Route } from "react-router-dom"
import Home from "../../pages/Home.jsx"
import New from "../../pages/New.jsx"
import Edit from "../../pages/Edit.jsx"
import Show from "../../pages/Show.jsx"
import Error from "../../pages/Error.jsx"
import Recipes from "../../pages/Recipes.jsx"



//import { useNavigate, Navigate }  from "react-router-dom"
// Use navigate is used after something happens, doesn't start unless something happens.
// Navigate is used as a component that can be rendered nothing needs to happen in order for it to trigger it, it will just start

// Functional component named RouteComponent
export default function RouteComponent() {
    return (
     
            <Routes>

                <Route path="/" element = { <Home /> } />
                
                <Route path="/recipes" element = { <Recipes />}/> //all recipes 
            
                <Route path="/recipes/:recipeID" element = { <Show />} />   //to obtain 1 id 
            
                <Route path= "/recipes/new" element = { <New />} />

                <Route path = "/recipes/:recipeID/edit" element = { <Edit />} />

                <Route path = "/error" element = { <Error />} />

                //Route path = "*" element = {<p>Wildcard</p>} 






            </Routes>

    
    
    )
}
