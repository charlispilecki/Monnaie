import React from "react";
import "./style.css"


function AddBtn({style, props}) {
    return (
        
        <span className={style} role="button" tabIndex="0">
            {props.children}
        </span>
    );
}

export default AddBtn;

// use this on your page to use the icon for the addBtn:
// import { FaPlusCircle } from "react-icons/fa";

// <addBtn><FaPlusCircle /></addBtn>