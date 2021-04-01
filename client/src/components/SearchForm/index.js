import React ,{useContext}from "react";
import "./style.css";
import VendorContext from "../../utils/VendorContext";
import { FaSearch } from 'react-icons/fa';


function SearchForm() {
  const {value,handleFormSubmit,handleInputChange} = useContext(VendorContext);
 
  return (
    <span>
    <form>
      <span className="form-group">
        <label htmlFor="search"></label>
        <input
          onChange={handleInputChange}
          value={value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a Vendor"
          id="search"
        />

        <button onClick={handleFormSubmit} className="btn btn-primary">
        <FaSearch />
 
        </button>
      </span>
    </form>
    </span>
  );
}

export default SearchForm;
