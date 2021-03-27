
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/Navbar/index';
// import AotherComonent from './components/another-component.component.js';
// import ThreeComponent from './components/three-component.comonent.js';

function App() { 
  return (    
    <Router>
      <Navbar />
      {/* <Route path="/budget" exact component = {Budget} /> */}
      {/* <Route path="/task" exact component = {Task} />
      <Route path="/community" exact component = {Community} /> */}
    </Router>
  );
}

export default App;