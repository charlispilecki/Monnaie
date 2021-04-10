import React, { useState, useEffect, useContext, useRef } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VendorContext from "../../utils/MonnaieContext";
function PopUpForm(props) {
  return (
    <div className="container-vendor">
      <form>
        <h3><u>Vendor Details</u></h3>

        <div className="form-group">
          <label htmlFor="inputName"></label>
          <input
            name="inputName"
            type="text"
            ref={props.inputName}
            className="form-control"
            id="inputName"
            placeholder="vendor name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="inputLocation"></label>
          <input
            name="inputLocation"
            type="text"
            ref={props.inputLocation}
            className="form-control"
            id="inputLocation"
            placeholder="Location of vendor"
          />
        </div>

        <div className="form-group">
          <label htmlFor="inputPhoneNo"></label>
          <input
            name="inputPhoneNo"
            type="text"
            ref={props.inputPhoneNo}
            className="form-control"
            id="inputPhoneNo"
            placeholder="vendor phone no"
          />
        </div>

        <div className="form-group">
          <label htmlFor="inputWebsite"></label>
          <input
            name="inputWebsite"
            type="text"
            ref={props.inputWebsite}
            className="form-control"
            id="inputWebsite"
            placeholder="vendor Website"
          />
        </div>

      </form>
    </div>
  );
}
export default PopUpForm;


