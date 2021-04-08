import React, { useState, useEffect, useRef } from "react";
import TableVendor from "../../components/TableVendor/index";
import Jumbotron from "../../components/Jumbotron/index";
import SearchForm from "../../components/SearchForm/index";
import SmoothScroll from "../../components/SmoothScroll";
import VendorContext from "../../utils/VendorContext";
import Carousel from "../../components/Carousel";
// import API from "../utils/API";
import Navbar from "../../components/Navbar";
import UserNav from "../../components/UserNav/UserNav"
import Header from "../../components/Header";
import PopUpForm from "../../components/PopUpForm";
// import Profile from "../../components/UserNav/UserNav";
import ModalVendor from "../../components/ModalVendor";
import API from "../../utils/API";
import "./style.css";

const styles = {
    paddingUp: {
        paddingTop: "100px"
    }
}

function VendorContainer() {
  const inputName = useRef();
  const inputLocation = useRef();
  const inputPhoneNo = useRef();
  const inputWebsite = useRef();
  const inputEmail = useRef();

  const [searchState, setSearchState] = useState("flower");
  const [formInputState, setformInputState] = useState([]);

  useEffect(() => {
    loadVendors()
  }, [])

  // Loads all books and sets them to books
  function loadVendors() {
    API.getVendors().then(res => {
        console.log(res);
        setformInputState(res.data);
    }).catch(err => console.log(err));
  };



  const handleFormSubmit = e => {
    e.preventDefault();
   
    let temp = {
      name: inputName.current.value,
      location: inputLocation.current.value,
      email: inputEmail.current.value,
      phone_no: inputPhoneNo.current.value,
      // website:inputWebsite.current.value,
    };

    console.log(temp);

    API.saveVendor(temp).then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setformInputState([...formInputState, res.data]);
      });
  };

  const handleSearchChange = event => {
    console.log(event.target.value);
    setSearchState(event.target.value);
  };

  // const handleSearchChange = (event) => {
  //   const searchState = event.target.value.toLowerCase(); //Priya
  //   console.log(searchState);
  //   // setTempSearch(searchState);
  //   const results = formInputState.filter(mySearch => {
  //     console.log(mySearch.inputName);
  //     return mySearch.inputName.toLowerCase().includes(event.target.value) || mySearch.inputLocation.toLowerCase().includes(event.target.value)
  //   });  
  //   console.log(results);

  //   if (InputSearch) {
  //     console.log("results");
  //     setManipulateState(results);

  //   }
  //   else {
  //     setManipulateState(employeeState);
  //   }

  return (
    <>
     
      <Carousel />
      <UserNav/>
      <SmoothScroll>
        <Jumbotron >
          <ModalVendor handleFormSubmit={handleFormSubmit}>
            <PopUpForm inputName={inputName} inputLocation={inputLocation} inputEmail={inputEmail} inputWebsite={inputWebsite}
              inputPhoneNo={inputPhoneNo} />
          </ModalVendor >
          <SearchForm handleSearchChange={handleSearchChange} results={searchState} />
          <TableVendor results={formInputState} />
        </Jumbotron >
      </SmoothScroll>
    </>
  );
    return (
        <>
                <Header />
                <div style={styles.paddingUp}>               
                     <Navbar />
                </div>
                <Carousel />
                <SmoothScroll>
                    <Jumbotron >
                        <ModalVendor handleFormSubmit={handleFormSubmit}>
                            <PopUpForm inputName={inputName} inputLocation={inputLocation} inputEmail={inputEmail} inputWebsite={inputWebsite}
                            inputPhoneNo={inputPhoneNo} />
                        </ModalVendor >
                        <SearchForm
                        handleSearchChange={handleSearchChange}
                        results={searchState}/>
              <TableVendor results={formInputState} />
                   </Jumbotron >
                </SmoothScroll>
        </>
    );
}
export default VendorContainer;
