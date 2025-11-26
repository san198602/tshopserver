const mongoose = require('mongoose');
const { Schema } = mongoose;
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
        unique: false
    },
    favoriteFoods:{
       type: [String],
       required: false,
        unique: false
    } ,
    password: {
        type: String,
        required: true,
        unique: false
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true }); 

userSchema.plugin(mongoosePaginate);
const User = mongoose.model('User', userSchema);



module.exports = User