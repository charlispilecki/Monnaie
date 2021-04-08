import React,{useState,useContext} from 'react';
import "./style.css";
import VendorContext from "../../utils/VendorContext";
// const ModalVendor = () => {
 function ModalVendor({children,handleFormSubmit}){
  // const {handleFormSubmit,setformInputState,formInputState} = useContext(VendorContext);
    const [vendorState, setVendorState] = useState(false);
    // const handleSubmit = e => {
    //   e.preventDefault();
    // };
// const toggle = () => {
//   if (vendorState){
//     setVendorState(false);
//   }
//   else{
//     setVendorState(true);
//   }
// }

  return (
   <span>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Add Vendor
    </button>
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
            <button onClick={handleFormSubmit} type="button" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
    </span>
    
    );
  }
export default ModalVendor;
