import React,{useContext,useState} from "react";
import "./style.css";
import VendorContext from "../../utils/VendorContext";
import { FaPlusCircle } from 'react-icons/fa';


function Jumbotron({children,onClick}) {
  const {addVendor} = useContext(VendorContext);
  
  return (
 
    <div
      style={{  clear: "both", textAlign: "center",width: "800px"  }}
      className="jumbotron border border-success"
    >
      
      {/* <span role="button" onClick={onClick} >
        <FaPlusCircle />
 
        </span> */}
        {children}
    </div>
  );
}

export default Jumbotron;


