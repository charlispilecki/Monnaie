import React, { useContext } from "react";
import "./style.css";
// import VendorContext from "../../utils/VendorContext";
// import { MdDelete } from 'react-icons/md';
import { FiTrash2 } from "react-icons/fi";
import { FaRegTrashAlt } from 'react-icons/fa';
function TableVendor({ results }) {
  // const {formInputState} = useContext(VendorContext);
  return (
    // <td >
    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth" >
      <thead>
        <tr>
        <th>Name</th>
        <th>Location</th>
        <th>Phone no</th>
        <th>Email</th>
        <th>Website</th>
        <th >  </th>
        </tr>
      </thead>
      { results.map(item => (<tr key={item._id}>
        <td>{item.name}</td>
        <td>{item.location}</td>
        <td>{item.phone_no}</td>
        <td>{item.email}</td>
        <td>{item.website}</td>
        
          <FaRegTrashAlt />
        
        {/* <span role="button" >
        <FaRegTrashAlt />
        </span> */}
      </tr>))}

      {/* <tr>
      <td>{formInputState[1].inputName}</td>
      <td>{formInputState[1].inputLocation}</td>
      <td>{formInputState[1].inputPhoneNo}</td>
      <td>{formInputState[1].inputEmail}</td>
      <td>{formInputState[1].inputWebsite}</td>
        <FaRegTrashAlt />
      </tr>
      <tr>
      <td>{formInputState[2].inputName}</td>
      <td>{formInputState[2].inputLocation}</td>
      <td>{formInputState[2].inputPhoneNo}</td>
      <td>{formInputState[2].inputEmail}</td>
      <td>{formInputState[2].inputWebsite}</td>
        <FaRegTrashAlt /> */}
      {/* </tr> */}
      {/* <tr>
      <td>{formInputState[3].inputName}</td>
      <td>{formInputState[3].inputLocation}</td>
      <td>{formInputState[3].inputPhoneNo}</td>
      <td>{formInputState[3].inputEmail}</td>
      <td>{formInputState[3].inputWebsite}</td>
        <FaRegTrashAlt />
      </tr>
      <tr>
      <td>{formInputState[4].inputName}</td>
      <td>{formInputState[4].inputLocation}</td>
      <td>{formInputState[4].inputPhoneNo}</td>
      <td>{formInputState[4].inputEmail}</td>
      <td>{formInputState[4].inputWebsite}</td>
        <FaRegTrashAlt />
      </tr> */}
    </table>
  );
}
export default TableVendor;







