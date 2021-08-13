const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    RestaurantId: {
        type: String,
    },
    Login: {
        type: String,
        required: true,
    },
    Username: {
        type: String,
    },
    Password: {
        type: String,
    },
    Signin: {
        type: String,
    },
    Image: {
        type: String,
    },
    Customers: [
        { UserId: String, Password: String, Name: String, Email: String },
    ],
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
