import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn() {
  return (
    <button className="delete is-medium ml-2"></button>
  );
}

export default DeleteBtn;
