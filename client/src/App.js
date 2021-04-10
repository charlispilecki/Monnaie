import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
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
import Account from "./components/Account/Account"
import AccountDetails from "./components/Account/Account";
import MonnaieContext from "./utils/MonnaieContext";

export default function App() {

    const [globalTasks, setGlobalTasks] = useState([]);
    
    return (
        <Router>
          <MonnaieContext.Provider value={{globalTasks, setGlobalTasks}}>
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
                <Route path="/task">
                    <TasksList></TasksList>
                </Route>
                <Route path="/Account">
                  <Account />
                </Route>
                <Route path="/">
                  <Profile />
                </Route>
              </Switch>
              <Footer></Footer>
            </div>
          </MonnaieContext.Provider>
        </Router>
    )
}
