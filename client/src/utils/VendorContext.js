import React from "react";

const VendorContext = React.createContext([{
    inputName: "",
    inputLocation: "",
    inputPhoneNo:"",
    inputEmail:"",
    inputWebsite:""
}]);

export default VendorContext;
