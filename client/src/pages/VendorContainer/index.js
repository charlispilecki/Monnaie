import React, { useState, useEffect, useRef } from "react";
import TableVendor from "../../components/TableVendor/index";
import Jumbotron from "../../components/Jumbotron/index";
import SearchForm from "../../components/SearchForm/index";
import SmoothScroll from "../../components/SmoothScroll";
import Carousel from "../../components/Carousel";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import PopUpForm from "../../components/PopUpForm";
import Profile from "../../components/UserNav/UserNav";
import ModalVendor from "../../components/ModalVendor";
import API from "../../utils/API";
import "./style.css";

const styles = {
  paddingUp: {
    paddingTop: "100px"
  },
  containment: {

  },
  marginTen: {
    margin: "10px"
  }
}

function VendorContainer() {
  const inputName = useRef();
  const inputLocation = useRef();
  const inputPhoneNo = useRef();
  const inputWebsite = useRef();

  const [searchState, setSearchState] = useState("");
  const [formInputState, setformInputState] = useState([]);
  const [filteredVendors, setfilteredVendors] = useState([]);


  useEffect(() => {
    loadVendors()
  }, [])

  // Loads all vendors and sets them to vendors
  function loadVendors() {
    API.getVendors().then(res => {
      console.log(res);
      setformInputState(res.data);
    }).catch(err => console.log(err));
  };

  // Deletes a vendor from the database with a given id, then reloads vendors from the db
  function deleteVendor(id) {
    API.deleteVendor(id)
      .then(res => loadVendors())
      .catch(err => console.log(err));
  }
  const handleFormSubmit = e => {
    e.preventDefault();

    let temp = {
      name: inputName.current.value,
      location: inputLocation.current.value,
      website: inputWebsite.current.value,
      phone_no: inputPhoneNo.current.value,
    };

    console.log(temp);

    API.saveVendor(temp).then(res => {
      if (res.data.length === 0) {
        throw new Error("No results found.");
      }
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      setformInputState([res.data, ...formInputState]);
      setfilteredVendors([res.data, ...formInputState]);
    });

    inputName.current.value = "";
    inputLocation.current.value = "";
    inputWebsite.current.value = "";
    inputPhoneNo.current.value = "";

  };

  useEffect(() => {
    setfilteredVendors(formInputState.filter(item => {
      return item.name.toLowerCase().includes(searchState)
    }))

  }, [searchState, formInputState]);

  const handleInputChange = event => {
    event.preventDefault();
    const temp = (event.target.value).toLowerCase();
    setSearchState(temp);
  }

  // const handleSearchChange = (event) => {
  //   const inputSearch = event.target.value; 
  //   console.log(inputSearch);
  //   const results = formInputState.filter(mySearch => {
  //     console.log(mySearch.name);
  //     return mySearch.name.includes(event.target.value)
  //      || mySearch.inputLocation.toLowerCase().includes(event.target.value) || mySearch.inputWebsite.toLowerCase().includes(event.target.value) || mySearch.inputPhoneNo.toLowerCase().includes(event.target.value)
  //   });
  //   console.log(results);

  //   if (inputSearch) {
  //     console.log("results");
  //     setSearchState(results);

  //   }
  //   else {
  //     setSearchState(formInputState);
  //   }
  // }


  return (


    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-3 mt-5"> <Profile /></div>
        <div className="col-sm-12 col-md-9 mt-5 text-center"> <h1 className="h1"><strong> Your Vendors  </strong></h1><SmoothScroll>

          <Jumbotron >

            <ModalVendor handleFormSubmit={handleFormSubmit}>
              <PopUpForm inputName={inputName} inputLocation={inputLocation} inputWebsite={inputWebsite}
                inputPhoneNo={inputPhoneNo} />
            </ModalVendor >
            <SearchForm handleInputChange={handleInputChange} />
            <TableVendor results={filteredVendors} deleteVendor={deleteVendor} />
          </Jumbotron >
        </SmoothScroll>
          <br></br>
          <h1 className="h1"><strong> Your Photos </strong></h1>
          <Carousel /></div>

      </div>

    </div>
  );

}
export default VendorContainer;
