import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import './Form.css';

const API = import.meta.env.VITE_APP_API_URL;

function Form() {
    const [form, setForm] = useState({
        recipe_name: "",
        creation_date: "",
        vegan: false,
        recipe_type: ""
    });

    const [selectedValue, setSelectedValue] = useState(""); // this will be used for the value that the user will choose from the dropdown menu

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            axios.get(`${API}/gfrecipes/${id}`)
                .then(res => setForm(res.data))
                .catch(err => console.log(err));
        }
    }, [id, API]);

    function handleTextInput(event) {
        const { id, value, type, checked } = event.target;

        // Handle boolean value for a checkbox
        const newValue = type === 'checkbox' ? checked : value;

        setForm(prevState => ({
            ...prevState,
            [id]: newValue
        }));
    }

    function newRecipe(event) {
        event.preventDefault();

        axios.post(`${API}/gfrecipes`, form)
            .then(res => navigate(`/gfrecipes/${res.data.id}`))
            .catch(error => console.log(error));
    }

    function submitEditedForm(event) {
        event.preventDefault();

        axios.put(`${API}/gfrecipes/${id}`, form)
            .then(res => navigate(`/gfrecipes/${res.data.id}`))
            .catch(error => console.log(error));
    }

    function handleSelectChange(event) {
        setSelectedValue(event.target.value)
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
                    type="date"
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
                    type='checkbox'
                    checked={form.vegan}
                    required
                    onChange={(e) => handleTextInput(e)}
                />
            </label>

            <label htmlFor='recipe_type'>
                <span>Recipe Type:</span>
                <select
                    id='recipe_type'
                    value={selectedValue}
                    required
                    onChange={handleSelectChange}
                >
                    <option value=''>Select a type</option>
                    <option value='Apps'>Apps</option>
                    <option value='Mains'>Mains</option>
                    <option value='Sweets'>Sweets</option>
                </select>
            </label>

            <button id="addRecipeButton" onClick={id ? submitEditedForm : newRecipe}>Add recipe</button>
        </form>
    );
}

export default Form;
