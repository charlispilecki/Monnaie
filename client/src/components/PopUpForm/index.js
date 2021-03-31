import React, { useState, useEffect ,useContext}from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VendorContext from "../../utils/VendorContext";

function PopUpForm() {
  const {inputName,inputLocation,inputPhoneNo,inputEmail,inputWebsite,handleFormSubmit} = useContext(VendorContext);
  return (
    // Name Of the Vendor
    // Location
    // Phone Number
    // Email address
    <div className="container ">
      <form>
        <h3>Vendor Details</h3>
        <div className="form-group">
          <label for="inputName"></label>
          <input 
          value={inputName}
          name="inputName"
          type="text" 
          className="form-control" 
          id="inputName" 
          placeholder="vendor name" />
        </div>

        <div className="form-group">
          <label for="inputLocation"></label>
          <input 
          value={inputLocation}
          name="inputLocation"
          type="text" 
          className="form-control" 
          id="inputLocation" 
          placeholder="Location of vendor" />
        </div>

        <div className="form-group">
          <label for="inputPhoneNo"></label>
          <input 
          value={inputPhoneNo}
          name="inputPhoneNo"
          type="text" 
          className="form-control" 
          id="inputPhoneNo" 
          placeholder="vendor phone no" />
        </div>

        <div className="form-group">
          <label for="inputEmail"></label>
          <input 
          value={inputEmail}
          name="inputEmail"
          type="text" 
          className="form-control" 
          id="inputEmail" 
          placeholder="vendor email" />
        </div>

        <div className="form-group">
          <label for="inputWebsite"></label>
          <input 
          value={inputWebsite}
          name="inputWebsite"
          type="text" 
          className="form-control" 
          id="inputWebsite" 
          placeholder="vendor Website" />
        </div>

        {/* <button onClick={handleFormSubmit} className="btn btn-primary">
          Submit
        </button> */}
      </form>
    </div>

  );
}
export default PopUpForm;


