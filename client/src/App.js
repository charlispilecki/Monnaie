import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Budget from "./components/Budget/index";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginDemo from "./components/Demo/LoginDemo"
import Community from "./components/Community"
import TasksList from "./pages/Tasks";

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