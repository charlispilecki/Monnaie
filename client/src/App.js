import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Budget from "./components/Budget/index";
import Chart from "./components/Chart/index";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./pages/VendorContainer";
import Footer from "./components/Footer";
import LoginDemo from "./components/Demo/LoginDemo"
import Community from "./components/Community"
import TasksList from "./pages/Tasks";

<<<<<<< HEAD
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import VendorContainer from './pages/VendorContainer/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// import TasksList from "./pages/Tasks";
// import AotherComonent from './components/another-component.component.js';
// import ThreeComponent from './components/three-component.comonent.js';

function App() { 
  return (    
   
    

    <Router>
    
    {/* <Profile /> */}
    
     <VendorContainer />
     
      {/* <Route path="/budget" exact component = {Budget} /> */}
      {/* <Route exact path="/task" exact component = {TasksList} /> */}
      {/* <Route path="/community" exact component = {Community} /> */}
    </Router>
  );
}

export default App;
=======
export default function App() {
    return (
        <Router>
          <div>
            <Header></Header>
            <Navbar></Navbar>
            <Switch>
              <Route path="/Budget">
                <Budget />
              </Route>
              <Route path="/Chart">
                <Chart />
              </Route>
              <Route path="/Profile">
                <Profile />
              </Route>
              <Route path="/Community">
                  <Community></Community>
              </Route>
              <Route path="/Task">
                  <TasksList></TasksList>
              </Route>
              <Route path="/">
                <LoginDemo></LoginDemo>
              </Route>
            </Switch>
            <Footer></Footer>
          </div>
        </Router>
    )
}
>>>>>>> c1480fd26203f892b30a913de87d9bba1cabf7f3
