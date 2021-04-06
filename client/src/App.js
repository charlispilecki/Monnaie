import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import VendorContainer from './pages/VendorContainer/index';
// import PopUpForm from './components/PopUpForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// import TasksList from "./pages/Tasks";

function App() {
  return (
    <Router>
      <Switch>
        {/* <PopUpForm /> */}

        <Route path="/" exact component={VendorContainer} />
        {/* <Route path="/budget" exact component = {Budget} />  */}
        {/* <Route exact path="/task" exact component = {TasksList} /> */}
        {/* <Route path="/community" exact component = {Community} /> */}
      </Switch>
    </Router>
  );
}

export default App;