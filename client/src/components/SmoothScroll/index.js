import React from "react";
import "./style.css";

const SmoothScroll = (props) => {
  const scrollContainerStyle = { width: "800px", maxHeight: "400px" };
  return (
    <div className="scrollbar scrollbar-primary" style={scrollContainerStyle}>
      {props.children}
    </div>
  );
}
export default SmoothScroll;