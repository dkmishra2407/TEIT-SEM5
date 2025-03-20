const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobileNo: {  // Use camelCase for consistency
        type: String,  // Changed from Number to String
        required: true
    },
    email: {  // Use lowercase for consistency
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);
