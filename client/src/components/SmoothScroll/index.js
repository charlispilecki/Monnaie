import React from "react";
import { MDBContainer } from "mdbreact";
// import SearchForm from '../SearchForm/index';
// import PopUpForm from '../PopUpForm/index';
import Jumbotron from "../Jumbotron/index";


import "./style.css";

const SmoothScroll = (props) => {
  const scrollContainerStyle = { width: "600px", maxHeight: "400px" };
  return (
    // <MDBContainer>
    <div className="scrollbar scrollbar-primary" style={scrollContainerStyle}>
      {props.children}

    </div>

  );
}

export default SmoothScroll;