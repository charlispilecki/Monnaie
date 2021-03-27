import React from "react";
import { MDBContainer } from "mdbreact";
import "./style.css";

const Vendor = () => {
  const scrollContainerStyle = { width: "600px", maxHeight: "250px" };
  return (
    <MDBContainer>
      <div className="scrollbar scrollbar-primary  mt-5 mx-auto" style={scrollContainerStyle}>
        <img
          alt=""
          src="https://mdbootstrap.com/img/Photos/Others/img%20(51).jpg"
        />
      </div>
    </MDBContainer>
  );
}

export default Vendor;