const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    username: String,
    password: String,
    venue: String,
    date: String,
    name: String,
    phone: String,
    city: String,
    state: String,
    venue: String,
    guests: Number,
    goalBudget: Number,
    profilePhoto: {
        // TODO: 
    },
    photos: [{
        // TODO: 
    }],
    budgetCategories: [{
        desc: String,
        lineItems: [{
            desc: String,
            vendor: String,
            estimatedCost: Number,
            actualCost: Number,
            paidOffAmount: Number,
        }]
    }],
    vendor: [{
        name: String,
        location: String,
        phone_no: String,
        website: String
    }],
    tasks: [{
        description: { type: String, required: true },
        date: { type: String, required: true },
        completed: { type: Boolean, default: false }
    }]
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", UserSchema);

module.exports = User;
