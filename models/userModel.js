const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    username: String,
    password: String,
    venue: String,
    date: Number,
    time: Number,
    numberOfGuests: Number,
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
    vendors: [{
        name: String,
        location: String,
        contactInfo: String,
        website: String
    }],
    tasks: [{
        desc: String,
        dueDate: Number,
        isComplete: Boolean,
        
    }]
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", UserSchema);

module.exports = User;