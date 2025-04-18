const mongoose  =require('mongoose');

const { Schema } = mongoose;
mongoose.connect(process.env.MONGO_URL);

const userSchema = new Schema({
    firstName : {
        type : String,
        required : true,
        maxLength : 30,
        trim : true
    },
    lastName : {
        type : String,
        trim : true,
        required : true,
        maxLength : 30
    },
    username : {
        type : String,
        minLength : 3,
        maxLength: 30,
        required : true,
        lowercase : true 
    },
    password : {
        type : String,
        required : true,
        maxLength : 15,
        minLength : 4,

    },
})

const accountSchema = new Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
})
const Account = mongoose.model('Account',accountSchema); 
const User = mongoose.model('User',userSchema);

module.exports = {
    User , Account 
}