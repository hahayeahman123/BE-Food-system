const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userShema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please tell your name"]
    },
    role:{
        type: String,
        enum: ['User','Admin'],
        default:'user'
    },
    password:{
        type: String,
        required: [true, 'Please provide password'],
        minlength:8,
        select: false
    },
    passwordConfirm:{
        type: String,
        required: [true, 'Please confirm password'],
        validate: {
            validator: function (el){
                return el === this.password
            },
            message: "Password are not the same"
        }
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active:{
        type: Boolean,
        default: true,
        select: false
    }
});

userShema.pre('save',async function(next){
    //hash password
    this.password = await bcrypt.hash(this.password,12);

    this.passwordConfirm = undefined;

    next()
});

userShema.methods.correctPassword = async (candidatePassword, userPassword)=>{
    return await bcrypt.compare(candidatePassword, userPassword)
};

userShema.methods.changePasswordAfter = function (JwtTimestamp){
    if(this.passwordChangedAt){
        const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
        return JwtTimestamp < changedTimestamp;

    }
}

const User = mongoose.model('User', userShema);

module.exports = User ;