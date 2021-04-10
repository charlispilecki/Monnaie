import React, { useState, Component } from 'react';
// import ImagesUploader from 'react-images-uploader';
// import 'react-images-uploader/styles.css';
// import 'react-images-uploader/font.css';
import SimpleFileUpload from 'react-simple-file-upload';

const styles = {
   margin: {
      margin: "20px"
   }
}


export default function Landing() {


   const [file, setFile] = useState();

   return (


      <div style={styles.margin}>
        
         <SimpleFileUpload
            apiKey="5e1c52480a8af29dff971c9315d10703"
            onSuccess={setFile}
            width="150"
            height="150"
         />
         {file && <p> <img src={file}></img></p>}

      </div>
   );
}


function handleFile(url) {
   console.log('The URL of the file is ' + url)
}
