import React, { useState, useEffect } from "react";
import TableVendor from "../../components/TableVendor/index";
import Jumbotron from "../../components/Jumbotron/index";
import SearchForm from "../../components/SearchForm/index";
import SmoothScroll from "../../components/SmoothScroll";
import VendorContext from "../../utils/VendorContext";
import Carousel from "../../components/Carousel";
// import API from "../utils/API";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
// import AddBtn from "../../components/AddBtn";
// import Row from "react-bootstrap/Row";
import PopUpForm from "../../components/PopUpForm";
// import Profile from "../../components/UserNav/UserNav";
import ModalVendor from "../../components/ModalVendor";
import "./style.css";
function VendorContainer() {
    const [searchState, setSearchState] = useState("wedding event");
    // const [userTemp, setUserTemp] = useState([]);
    const [formInputState, setformInputState] = useState([
        {
            inputName: "one Name",
            inputLocation: "one location",
            inputPhoneNo: "one phone",
            inputEmail: "one Email",
            inputWebsite:"dde"
        },
        {
            inputName: "two name",
            inputLocation: "Two Location",
            inputPhoneNo: "Two phone",
            inputEmail: "Two Email",
            inputWebsite:"ddecf"
        },
        {
            inputName: "Three name",
            inputLocation: "Three Location",
            inputPhoneNo: "Three phone",
            inputEmail: "Three Email",
            inputWebsite:"dfdvf"
        }
    ]);
    const addVendor = () => {
        console.log("adding vendor");
    }
    // useEffect(()=>{
    // })
    // const hideOrShow = () => {
    //     if (!vendorState) {
    //     }
    // }
    // const handleInputChange = event => {
    //     setSearchState(event.target.value);
    // };
    // map function of all vendor
    {/* <div>
{formInputState.map(item => { 
    <table>
        <tr>{item.inputName}</tr>
    </table>
    </
})
}
    </div> */}
    return (
        <>
            <VendorContext.Provider value={{formInputState, searchState,setformInputState}}>
                <Header />
                <Navbar />
                {/* <Profile /> */}
                <Carousel />
                <SmoothScroll>
                    <Jumbotron onClick={addVendor}>
                        <ModalVendor handleFormSubmit={handleFormSubmit}>
                            <PopUpForm >
                                </PopUpForm>
                        </ModalVendor >
                        {/* <Row> */}
                        <SearchForm
                        // handleFormSubmit={handleFormSubmit}
                        // handleInputChange={handleInputChange}
                        // results={searchState}
                        />
                        {/* <AddBtn /> */}
                        {/* </Row> */}
                        {/* {formInputState.map(item => {
                            return <TableVendor />
                        })
                        } */}
                        <TableVendor />
                        {/* <TableVendor /> */}
                    </Jumbotron >
                </SmoothScroll>
            </VendorContext.Provider>
        </>
    );
}
export default VendorContainer;