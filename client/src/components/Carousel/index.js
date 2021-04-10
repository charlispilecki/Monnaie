import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "./images/image1.jpeg";
import img2 from "./images/image2.jpeg";
import img6 from "./images/image6.jpeg";
import img4 from "./images/image4.jpeg";
import img8 from "./images/image8.jpeg";
import SimpleFileUpload from 'react-simple-file-upload';


function Carousel() {

    const [file, setFile] = useState({
        file: ''
    });

    
    return (
        <>

            <div className="Carousel">

                <SimpleFileUpload
                    apiKey="5e1c52480a8af29dff971c9315d10703"
                    onSuccess={setFile}
                    width="120"
                    height="9"
                />

                <AliceCarousel autoPlay autoPlayInterval="3000">
                    <img src={file} className="sliderimg" />
                    <img src={img2} className="sliderimg" />
                    <img src={img6} className="sliderimg" />
                    <img src={img4} className="sliderimg" />
                    <img src={img8} className="sliderimg" />
                </AliceCarousel>
            </div>
        </>
    );
}

export default Carousel;