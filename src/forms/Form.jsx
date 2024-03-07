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

        setForm((currentState) => ({
            ...currentState,
            [id]: value,
        }));
    }

    function newRecipeAdded(event) {
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
            {/* Add other input fields here */}
            <button type="submit" onClick={id ? submitEditedForm : newRecipeAdded}>Submit</button>
        </form>
    );
}

export default Form;
