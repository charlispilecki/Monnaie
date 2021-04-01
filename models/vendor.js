const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  phone_no: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Vendor= mongoose.model("Vendor", bookSchema);

module.exports = Vendor;
