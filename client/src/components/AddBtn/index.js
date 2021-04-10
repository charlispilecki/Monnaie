import React from "react";
import "./style.css"


function AddBtn({handleClick, children}) {
    return (
        <button className="button is-info is-outlined ml-2 mb-2" onClick={handleClick}>
            {children}
        </button>
        // <span className={custStyle} role="button" tabIndex="0">
        //     {children}
        // </span>
    );
}

export default AddBtn;

// use this on your page to use the icon for the addBtn:
// import { FaPlusCircle } from "react-icons/fa";

// <addBtn><FaPlusCircle /></addBtn>