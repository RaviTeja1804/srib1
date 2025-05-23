import mongoose,{Schema} from "mongoose";

const userModel = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minilength: 4
    },
    pieces: {
        type: Number,
        default: 0
    }
}, {timestamps: true})

export default mongoose.model("User",userModel);