import React from 'react';
import Account from "./components/Account/Account"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chart from './components/Chart/index.js';
import UserNav from './components/UserNav/UserNav';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import VendorContainer from './pages/VendorContainer/index';
// import PopUpForm from './components/PopUpForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// import TasksList from "./pages/Tasks";

function App() {
  return (

    <BrowserRouter>
      <Switch>
        {/* <Route path="/">
        </Route> */}
        <Route path="/Chart">
          <Chart />
          
        </Route>
        <Route path="/Account">
      
          <Account/>
        </Route>
        <Route path="/VendorContainer">
          <VendorContainer />
          
        </Route>
        <Route path="/UserNav">
          <UserNav />
          
        </Route>
      </Switch>
    </BrowserRouter>

    // <Router>


    //  <Chart />
     
  //     {/* <Route path="/budget" exact component = {Budget} /> */ }
  // {/* <Route exact path="/task" exact component = {TasksList} /> */ }
  // {/* <Route path="/community" exact component = {Community} /> */ }
  // {/* </Router> */ }
  );
}

export default App;