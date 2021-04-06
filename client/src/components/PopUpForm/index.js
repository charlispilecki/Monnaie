import React, { useState, useEffect ,useContext,useRef}from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VendorContext from "../../utils/VendorContext";
function PopUpForm(props) {
  // const {handleInputChange}=props
  
  // ,inputName,inputLocation,inputPhoneNo,inputEmail,inputWebsite
  // const {setformInputState} = useContext(VendorContext);
  // handleInputChange
  return (
    // Name Of the Vendor
    // Location
    // Phone Number
    // Email address
    <div className="container ">
      <form>
        <h3>Vendor Details</h3>
        <div className="form-group">
          <label for="inputName">Name Of the Vendor</label>
          <input 
          // value={inputName}
          name="inputName"
          type="text" 
          ref={props.inputName}
          className="form-control" 
          id="inputName" 
          placeholder="vendor name" 
          // onChange={e => handleInputChange(e,value)}
           />
           {/* onChange={e => handleInputChange(e.target.value)} */}
        </div>
        <div className="form-group">
          <label for="inputLocation"></label>
          <input 
          // value={inputLocation}
          name="inputLocation"
          type="text" 
          ref={props.inputLocation}
          className="form-control" 
          id="inputLocation" 
          placeholder="Location of vendor" 
          // onChange={e => handleInputChange(e)}
          />
          
        </div>
        <div className="form-group">
          <label for="inputPhoneNo"></label>
          <input 
          // value={inputPhoneNo}
          name="inputPhoneNo"
          type="text" 
          ref={props.inputPhoneNo}
          className="form-control" 
          id="inputPhoneNo" 
          placeholder="vendor phone no" 
          // onChange={e => handleInputChange(e)}
          />
          {/* onChange={e => handleInputChange(e.target.value)} */}
        </div>
        <div className="form-group">
          <label for="inputEmail"></label>
          <input 
          // value={inputEmail}
          name="inputEmail"
          type="text" 
          ref={props.inputEmail}
          className="form-control" 
          id="inputEmail" 
          placeholder="vendor email" 
          // onChange={e => handleInputChange(e)}
          />
          {/* onChange={e => handleInputChange(e.target.value)} */}
        </div>
        <div className="form-group">
          <label for="inputWebsite"></label>
          <input 
          // value={inputWebsite}
          type="text" 
          ref={props.inputWebsite}
          className="form-control" 
          id="inputWebsite" 
          placeholder="vendor Website" 
          // onChange={e => handleInputChange(e)}
          />
        </div>
        {/* onChange={e => setformInputState.inputWebsite(e.target.value)} */}
        {/* onChange={e => handleInputChange(e.target.value)} */}
        {/* <button onClick={handleFormSubmit} className="btn btn-primary">
          Submit
        </button> */}
      </form>
    </div>
  );
}
export default PopUpForm;


