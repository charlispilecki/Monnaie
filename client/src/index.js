import API from "./utils/API"
import React from "react";
import ReactDom from "react-dom";
import App from "./App";

API.getUser()
    .then(user => {
        // Load the React app
        ReactDom.render(<App />, document.getElementById("root"));
    })
    .catch(error => {
        // User is not logged in so redirect to landing page
        console.log(error)
        window.location = 'landing.html'
    })