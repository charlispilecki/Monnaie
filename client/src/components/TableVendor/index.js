import React from "react";
import "./style.css";
import { FaRegTrashAlt } from 'react-icons/fa';
import DeleteBtn from "../DeleteBtn";

function TableVendor({ results , deleteVendor}) {
  return (
    // <td >
    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth" >
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone #</th>
          <th>Website</th>
        </tr>
      </thead>
      { results.map(item => (<tr key={item._id}>
        <td>{item.name}</td>
        <td>{item.location}</td>
        <td>{item.phone_no}</td>
        <td>{item.website}</td>
        {/* <DeleteBtn onClick={() => deleteVendor(vendors_id)} /> */}
        <FaRegTrashAlt onClick={() => deleteVendor(item._id)} />

        {/* <span role="button" >
        <FaRegTrashAlt />
        </span> */}
      </tr>))}
    </table>
  );
}
export default TableVendor;







