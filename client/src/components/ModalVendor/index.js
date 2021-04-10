import React from 'react';
import "./style.css";
import { FaPlusCircle } from 'react-icons/fa';

 function ModalVendor({children,handleFormSubmit}){
  return (
   <span role="button" className="fa mt-5 mr-6 is-size-8" data-bs-toggle="modal" data-bs-target="#exampleModal">
        {/* <button className="button fa mt-5 mr-6 is-size-5" data-bs-toggle="modal" data-bs-target="#exampleModal" > */}
        <FaPlusCircle />
        {/* </button> */}

    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel"></h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button onClick={handleFormSubmit} type="button" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
          </div>
        </div>
      </div>
    </div>
    </span>
    
    );
  }
export default ModalVendor;
