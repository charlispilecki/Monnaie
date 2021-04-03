
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import VendorContainer from './pages/VendorContainer/index';
// import PopUpForm from './components/PopUpForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import TasksList from "./pages/Tasks";
// import AotherComonent from './components/another-component.component.js';
// import ThreeComponent from './components/three-component.comonent.js';

function App() { 
  return (    
   
    
    <Router>
      
      {/* <PopUpForm /> */}
    
     
      {/* <Route path="/budget" exact component = {Budget} />  */}
      <Route exact path="/task" exact component = {TasksList} />
       {/* <Route path="/community" exact component = {Community} /> */}
    </Router> 
  );
}

export default App;