const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
  name: { type: String },
  location: { type: String },
  phone_no: { type: String },
  website: { type: String },
  date: { type: Date, default: Date.now }
});

const Vendor = mongoose.model("Vendor", VendorSchema);

module.exports = Vendor;



// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const UserSchema = new Schema({
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     synopsis: String,
//     date: { type: Date, default: Date.now }
// });
// const User = mongoose.model("User", UserSchema);
// module.exports = User;