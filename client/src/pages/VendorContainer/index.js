import React, { useState, useEffect,useRef } from "react";
import TableVendor from "../../components/TableVendor/index";
import Jumbotron from "../../components/Jumbotron/index";
import SearchForm from "../../components/SearchForm/index";
import SmoothScroll from "../../components/SmoothScroll";
import VendorContext from "../../utils/VendorContext";
import Carousel from "../../components/Carousel";
// import API from "../utils/API";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import PopUpForm from "../../components/PopUpForm";
// import Profile from "../../components/UserNav/UserNav";
import ModalVendor from "../../components/ModalVendor";
import API from "../../utils/API";
import "./style.css";

function VendorContainer() {
const inputName=useRef();
const inputLocation=useRef();
const inputPhoneNo=useRef();
const inputWebsite=useRef();
const inputEmail=useRef();

    const [searchState, setSearchState] = useState("flower");
    const [formInputState, setformInputState] = useState([
        {
            inputName: "one Name",
            inputLocation: "one location",
            inputPhoneNo: "one phone",
            inputEmail: "one Email",
            inputWebsite:"dde"
        }
      ]);

       const [formTableState, setformTableState] = useState([
            {
                inputName: "Two Name",
                inputLocation: "one location",
                inputPhoneNo: "one phone",
                inputEmail: "one Email",
                inputWebsite:"dde"
            },
              {
                inputName: "Two Name",
                inputLocation: "one location",
                inputPhoneNo: "one phone",
                inputEmail: "one Email",
                inputWebsite:"dde"
            }
        ]);
  

    useEffect(() => {
        loadVendors()
      }, [])
    
      // Loads all books and sets them to books
      function loadVendors() {
        API.getVendors()
          .then(res => {
            console.log(res);
            setformTableState(res.data)
          }
          )
          .catch(err => console.log(err));
      };
    
   
  
    const handleFormSubmit = e => {
        e.preventDefault();
        // console.log(e);
        setformInputState([{inputName:inputName.current.value,
             inputLocation:inputLocation.current.value,
             inputEmail:inputEmail.current.value,
             inputPhoneNo:inputPhoneNo.current.value,
             inputWebsite:inputWebsite.current.value,
        }]);
          API.saveVendor(formInputState)
          .then(res => {
            if (res.data.length === 0) {
              throw new Error("No results found.");
            }
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            // loadVendors();
            });
      };

      //   const handleFormSubmit = event => {
      //   event.preventDefault();

      //   API.saveVendor(formInputState)
      //     .then(res => {
      //       if (res.data.length === 0) {
      //         throw new Error("No results found.");
      //       }
      //       if (res.data.status === "error") {
      //         throw new Error(res.data.message);
      //       }
      //       loadVendors();
      //       });
      // };


   
      const handleSearchChange = event => {
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
                <Header />
                <Navbar />
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