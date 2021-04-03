import React from "react";
import "./style.css"


function AddBtn({custStyle, children}) {
    return (
        
        <span className={custStyle} role="button" tabIndex="0">
            {children}
        </span>
    );
}

export default AddBtn;

// use this on your page to use the icon for the addBtn:
// import { FaPlusCircle } from "react-icons/fa";

// <addBtn><FaPlusCircle /></addBtn>