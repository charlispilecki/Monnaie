import React, { Component } from 'react';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

const styles = {
   margin: {
      margin: "20px"
   }
}
export default class MyUploader extends Component {
   render() {
      return (
         <div style={styles.margin}>
            <ImagesUploader
            //    url="http://localhost:3001/multiple"
               optimisticPreviews
               onLoadEnd={(err) => {
                  if (err) {
                     console.error(err);
                  }
               }}
               label="Upload multiple images"
            />

            <ImagesUploader
            //    url="http://localhost:3001/notmultiple"
               optimisticPreviews
               multiple={false}
               onLoadEnd={(err) => {
                  if (err) {
                     console.error(err);
                  }
               }}
               label="Upload a picture"
            />
         </div>
      );
   }
}