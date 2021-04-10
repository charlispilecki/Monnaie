const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    ImageName: {
        imageName: {
            type: String,
            required: true,
            default: "none"
        },
        imageData:{ 
            type: String, 
            required: true
        }
    }
});

const Vendor = mongoose.model("Image", bookSchema);

module.exports = Image;