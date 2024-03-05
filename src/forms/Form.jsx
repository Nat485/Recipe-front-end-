import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {


const [form, setForm] = useState({
    recipe_name:"",
    creation_date:"",
    vegan: false,
    recipe_type:""

});
    
const nav = useNavigate();

function handleTextInput(event) {
    const id = event.target.id;
    const value = event.target.value;

    //setForm({form, [id] : value})

    setForm((currentState) => {
    
        return {
            ...currentState, 
            [id]: value,
        };
    });
}}
