import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {
    return (
        <nav className="navBar">
            <Link to="/">Home</Link>
            <Link to="/recipes">All Recipes</Link>
            <Link to="/recipes/new">Add A Recipe</Link>
        </nav>
    );
}

export default NavBar;