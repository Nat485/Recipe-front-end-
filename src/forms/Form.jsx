import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Form.css'

const API = import.meta.env.VITE_APP_API_URL

function Form() {
    const [form, setForm] = useState({
    recipe_name:"",
    creation_date:"",
    vegan: false,
    recipe_type:""

});
    
const nav = useNavigate();

const { id } = useParams()

useEffect(() => {
    if(id) {
        axios.get('${API}/bourbons/${id}')
            .then(res => setForm(res.data))
            .catch(err => console.log(err))

    }
}
)

function handleTextInput(event) {
    const id = event.target.id;
    const value = event.target.value
}
    //setForm({form, [id] : value})

    setForm((currentState) => {
    
        return {
            ...currentState, 
            [id]: value,
        };
    });
}}

function newRecipeAdded(event) {
    event.preventDefault()

    axios.post(`${API}/recipes`, form)
        .then(res => Navigate(`/recipes/${res.id}`))
        .catch(error => console.log(error))
}

function submitEditedForm(event) {
    event.preventDefault()

    axios.put(`${API}recipe/${id}`, form)
        .then(res => navigate(`/bourbons/${res.id}`))
        .catch(error => console.log(error))
}

return (
    <form className="form">

        {     }   //recipe_name
        <label htmlFor=' recipe_name'>
            <span>Recipe Name:</span>
            <input
            id='recipe_name'
            type='text'
            value={form.recipe_name}
            required
            onChange={(e) => { handleTextInput(e)}
            />
            </label>
            <label htmlFor=" "
            </input>
    </form>
)



export function Form