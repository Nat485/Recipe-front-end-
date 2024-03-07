import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Form.css';

const API = import.meta.env.VITE_APP_API_URL;

function Form() {
    const [form, setForm] = useState({
        recipe_name: "",
        creation_date: "",
        vegan: false,
        recipe_type: ""
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            axios.get(`${API}/recipes/${id}`)
                .then(res => setForm(res.data))
                .catch(err => console.log(err));
        }
    }, [id, API]);

    function handleTextInput(event) {
        const id = event.target.id;
        const value = event.target.value;

        //for the boolean like vegan
        if (event.target.type === 'checkbox') {
            value = event.target.checked;
        }
        
        setForm((currentState) => ({
            ...currentState,
            [id]: value,
        }));
    }

    function newRecipe(event) {
        event.preventDefault();

        axios.post(`${API}/recipes`, form)
            .then(res => navigate(`/recipes/${res.data.id}`))
            .catch(error => console.log(error));
    }

    function submitEditedForm(event) {
        event.preventDefault();

        axios.put(`${API}/recipe/${id}`, form)
            .then(res => navigate(`/recipe/${res.data.id}`))
            .catch(error => console.log(error));
    }

    return (
        <form className="form">
              
              {/* recipe_name */}
            <label htmlFor='recipe_name'>
                <span>Recipe Name:</span>
                <input
                    id='recipe_name'
                    type='text'
                    value={form.recipe_name}
                    required
                    onChange={(e) => handleTextInput(e)}
                />
            </label>
          
           {/* creation_date */}
           <label htmlFor='creation_date'>
                <span>Creation Date:</span>
                <input
                    id='creation_date'
                    type='int'
                    value={form.creation_date}
                    required
                    onChange={(e) => handleTextInput(e)}
                />
            </label>

             {/* vegan */}
           <label htmlFor='vegan'>
                <span>Vegan:</span>
                <input
                    id='vegan'
                    type='boolean'
                    value={form.vegan}
                    required
                    onChange={(e) => handleTextInput(e)}
                />
            </label>

            {/* recipe type */}
           <label htmlFor='recipe_type'>
                <span>Recipe Type:</span>
                <input
                    id='recipe_type'
                    type='text'
                    value={form.recipe_type}
                    required
                    onChange={(e) => handleTextInput(e)}
                />
            </label>
            
           
        </form>
    );
}

export default Form;
