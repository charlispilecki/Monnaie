import React, { useState, useEffect ,useContext}from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VendorContext from "../../utils/VendorContext";

function PopUpForm() {
  const {inputName,inputLocation,inputPhoneNo,inputEmail,handleFormSubmit} = useContext(VendorContext);
  return (

    <div className="container">
      <form>
        <div className="form-group">
          <label for="inputName">Name Of the Vendor</label>
          <input 
          value={inputName}
          name="inputName"
          type="text" 
          className="form-control" 
          id="inputName" 
          placeholder="vendor name" />
        </div>

        <div className="form-group">
          <label for="inputLocation">Location</label>
          <input 
          value={inputLocation}
          name="inputLocation"
          type="text" 
          className="form-control" 
          id="inputLocation" 
          placeholder="Location of vendor" />
        </div>

        <div className="form-group">
          <label for="inputPhoneNo">Phone Number</label>
          <input 
          value={inputPhoneNo}
          name="inputPhoneNo"
          type="text" 
          className="form-control" 
          id="inputPhoneNo" 
          placeholder="vendor phone no" />
        </div>

        <div className="form-group">
          <label for="inputEmail">Email address</label>
          <input 
          value={inputEmail}
          name="inputEmail"
          type="text" 
          className="form-control" 
          id="inputEmail" 
          placeholder="vendor email" />
        </div>

        <button onClick={handleFormSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>

  );
}
export default PopUpForm;


