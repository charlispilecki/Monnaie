import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import VendorContainer from './pages/VendorContainer/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import TasksList from "./pages/Tasks";
// import AotherComonent from './components/another-component.component.js';
// import ThreeComponent from './components/three-component.comonent.js';

function App() { 
  return (    
   
<<<<<<< HEAD
    
    <Router>
      <Switch>
        <Route exact path="/" exact component = {VendorContainer} />
      {/* <Route path="/budget" exact component = {Budget} /> */}
      <Route exact path="/task" exact component = {TasksList} />
      {/* <Route path="/community" exact component = {Community} /> */}
      </Switch>
      
    </Router>
=======
    
    <Router>
      
      <VendorContainer />
    
     
      {/* <Route path="/budget" exact component = {Budget} />  */}
      <Route exact path="/task" exact component = {TasksList} />
       {/* <Route path="/community" exact component = {Community} /> */}
    </Router> 
>>>>>>> 9c2d891b7524f290d3763882374ae1be8f6a0301
  );
}

export default App;