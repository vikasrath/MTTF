import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    orderId: {
        type: String,
        required: true
    },
    ismember: {
        type: Boolean,
        default: false
    }

})

const user = mongoose.models.user || mongoose.model("user", userSchema);

export default user;