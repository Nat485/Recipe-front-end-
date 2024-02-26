//entry point of the app

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
import "./index.css";
import { render } from 'react-dom';

ReactDOMcreateRoot(document.getElementById("root"))
render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);

