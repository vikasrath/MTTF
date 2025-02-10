import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    memberId: { type: String },
    registrationDate: { type: Date, default: Date.now },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    orderId: { type: String, required: true },
    isMember: { type: Boolean, default: false },
    department: { type: String },
    university: { type: String },
    jobTitle: { type: String },
    researchField: { type: String },
    technicalExperience: { type: String },
    teachingExperience: { type: String },
    researchExperience: { type: String },
    linkedin: { type: String },
    googleScholar: { type: String },
    researchGate: { type: String },
    otherProfile: { type: String },
})

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;