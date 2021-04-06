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



// module.exports = function(sequelize, DataTypes) {
//     const User = sequelize.define('User', {
//       // The email cannot be null, and must be a proper email before creation
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//           isEmail: true
//         }
//       },
//       // The password cannot be null
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false
//       },
//       estimatedTotalCost: {
//         type: DataTypes.INTEGER,
//         allowNull: true
//       }
//     });