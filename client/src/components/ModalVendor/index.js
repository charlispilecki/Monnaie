import React,{useState,useContext} from 'react';
import "./style.css";
import VendorContext from "../../utils/VendorContext";

// const ModalVendor = () => {
 function ModalVendor({children}){
  const {handleFormSubmit} = useContext(VendorContext);
    const [vendorState, setVendorState] = useState(false);
    
//     // const handleSubmit = e => {
//     //   e.preventDefault();
    
//     // };
  
// // const toggle = () => {
// //   if (vendorState){
// //     setVendorState(false);
// //   }
// //   else{
// //     setVendorState(true);
// //   }
// // }
//   return (
//    <span>
//     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//       Add Vendor
//     </button>
    
    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            {children}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button onClick={handleFormSubmit} type="button" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
    // </span>



//     // <MDBContainer>
//     //   <MDBBtn onClick={toggle}>Add vendor</MDBBtn> 
//     //   <MDBModal isOpen={vendorState} toggle={toggle}> 
//     //     <MDBModalHeader toggle={toggle}>MDBModal title</MDBModalHeader>
//     //     <MDBModalBody>
//     //       (Tesing Modal Priya)
//     //     </MDBModalBody>
//     //    <MDBModalFooter>
//     //       <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
//     //       <MDBBtn color="primary">Save changes</MDBBtn>
//     //     </MDBModalFooter>
//     //    </MDBModal>
//     // </MDBContainer>
//     );
  }


// export default ModalVendor;
