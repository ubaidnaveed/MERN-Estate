import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fdefault-user.html&psig=AOvVaw1xaKMVFDpLSMfoSeVWIa_9&ust=1714051211506000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDqquL42oUDFQAAAAAdAAAAABAE"
    }
},{timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;
    