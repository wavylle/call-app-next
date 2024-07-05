import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        company: {
            type: String,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        resetPasswordToken: {
            type: String,
        },
        isActivated: {
            type: Boolean,
            default: false
        },
        activationCode: {
            type: String,
        },
    },
    {timestamps: true}
)

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User;

// module.exports = mongoose.model('User', userSchema);