import React from "react";
import "./style.css"


function AddBtn(props) {
    return (
        
        <span className={...props} role="button" tabIndex="0">
            {props.children}
        </span>
    );
}

export default AddBtn;