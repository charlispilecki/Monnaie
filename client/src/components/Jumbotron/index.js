import React,{useContext,useState} from "react";
import "./style.css";
function Jumbotron({children,onClick}) {
  return (

    <div
      style={{  clear: "both", textAlign: "center"  }}
      className="jumbotron border border-success"
    >
    
        {children}
    </div>
  );
}

export default Jumbotron;


