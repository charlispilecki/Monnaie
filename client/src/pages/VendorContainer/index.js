import React, { useState, useEffect } from "react";
import TableVendor from "../../components/TableVendor/index";
import Jumbotron from "../../components/Jumbotron/index";
import SearchForm from "../../components/SearchForm/index";
import SmoothScroll from "../../components/SmoothScroll";
import VendorContext from "../../utils/VendorContext";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";

// import PopUpForm from "../../component/PopUpForm";
// import ModalVendor from "../../component/ModalVendor";
import "./style.css";

function VendorContainer() {
    const [searchState, setSearchState] = useState("wedding event");
    const [formInputState, setformInputState] = useState([
        {
            inputName: "one Name",
            inputLocation: "one location",
            inputPhoneNo: "one phone",
            inputEmail: "one Email"
        },
        {
            inputName: "two name",
            inputLocation: "Two Location",
            inputPhoneNo: "Two phone",
            inputEmail: "Two Email"
        },
        {
            inputName: "Three name",
            inputLocation: "Three Location",
            inputPhoneNo: "Three phone",
            inputEmail: "Three Email"
        }
    ]);

    const addVendor=() =>{
console.log("adding vendor");
    }
    // useEffect(()=>{

    // })

    // const hideOrShow = () => {
    //     if (!vendorState) {

    //     }
    // }

    const handleFormSubmit = event => {
        event.preventDefault();

    };

    const handleInputChange = event => {
        setSearchState(event.target.value);

    };

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
            <VendorContext.Provider value={formInputState, searchState}>
                {/* <PopUpForm /> */}
                <Header /> 
                {/* <Navbar /> */}
               
                <SmoothScroll>
                    <Jumbotron>
                        {/* <ModalVendor /> */}
                        <SearchForm
                        // handleFormSubmit={handleFormSubmit}
                        // handleInputChange={handleInputChange}
                        // results={searchState}
                        />

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



// import React, { useState, useEffect } from "react";
// import TableVendor from "../../component/TableVendor/index";
// import Jumbotron from "../../component/Jumbotron/index";
// import SearchForm from "../../component/SearchForm/index";
// import SmoothScroll from "../../component/SmoothScroll/index";
// import AddBtn from "../../component/AddBtn/index";
// import VendorContext from "../../utils/VendorContext";
// import "./style.css";

// function Search() {
//   const [vendorState, setVendorState] = useState({
//     inputName: "",
//     inputLocation: "",
//     inputPhoneNo:"",
//     inputEmail:""

//   });

// //   const [search, setSearch] = useState("Wikipedia");
// //   const [error, setError] = useState("");

//   // When the component mounts, update the title to be Wikipedia Searcher
//   useEffect(() => {
//     document.title = "Wikipedia Searcher";

//     if (!search) {
//       return;
//     }

//     API.searchTerms(search)
//       .then(res => {
//         if (res.data.length === 0) {
//           throw new Error("No results found.");
//         }
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         setArticleState({
//           title: res.data[1][0],
//           url: res.data[3][0]
//         });
//       })
//       .catch(err => setError(err));
//   }, [search]);

//   const handleInputChange = event => {
//     setSearch(event.target.value);
//   };

//   const handleFormSubmit = event => {
//     event.preventDefault();
//   };
//   return (
//     <VendorContext.Provider value={articleState}>
//       <div>
//         <Container style={{ minHeight: "100vh" }}>
//           <h1 className="text-center">Search For Anything on Wikipedia</h1>
//           <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
//             {error}
//           </Alert>
//           <SearchForm
//             handleFormSubmit={handleFormSubmit}
//             handleInputChange={handleInputChange}
//             results={search}
//           />
//           <SearchResults />
//         </Container>
//       </div>
//     </VendorContext.Provider>
//   );
// }

// export default Search;

