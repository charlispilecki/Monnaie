import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <button class="delete is-medium ml-2"></button>
  );
}

export default DeleteBtn;
