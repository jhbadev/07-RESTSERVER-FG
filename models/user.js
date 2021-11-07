const { Schema, model } = require('mongoose');

const UserSchema = Schema({

    name: {
        type: String,
        required: [true, 'Names is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    img: {
        type: String,
        default: 'image'
    
    },
    role: {
        type: String,
        required: [true, 'Role is required'],
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    state: {
        type: Boolean,
        default: false,
        required: [true, 'State is required'],
    },
    google: {
        type: Boolean,
        default: false,
        required: [true, 'Google is required'],
    },

})

module.exports = model('User', UserSchema);
