const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, 
      },
      password: {
        type: String,
        required: true,
        minlength: 6,
      },
})

const ApplySchema = new mongoose.model('Users', userSchema);

module.exports = ApplySchema;