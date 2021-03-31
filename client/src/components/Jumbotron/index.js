import React,{useContext,useState} from "react";
import "./style.css";
import VendorContext from "../../utils/VendorContext";
import { FaPlusCircle } from 'react-icons/fa';


function Jumbotron({children}) {
  const {addVendor} = useContext(VendorContext);
 
  return (
 
    <div
      style={{  clear: "both",  textAlign: "center",width: "600px" }}
      className="jumbotron border border-success"
    >
      {children}
      <span role="button" onClick={addVendor} >
        <FaPlusCircle />
 
        </span>
    </div>
  );
}

export default Jumbotron;


