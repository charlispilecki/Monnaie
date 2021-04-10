import React from "react";
import "./style.css";

const SmoothScroll = (props) => {
  const scrollContainerStyle = { margin: 20, height: 600 };
  return (
    <div className="col-lg scrollbar scrollbar-primary" style={scrollContainerStyle}>
      {props.children}
    </div>
  );
}
export default SmoothScroll;