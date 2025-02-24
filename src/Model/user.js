import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: {type: String, default: ""},
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
    deletionDate: { type: Date }, // Will be set if isMember is false
});

// Middleware to set `deletionDate` when a new user is created
userSchema.pre("save", function (next) {
    if (!this.isMember) {
        this.deletionDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000); // 2 days from now
    } else {
        this.deletionDate = undefined; // Members should not have a deletion date
    }
    next();
});

// Static method to delete expired users
userSchema.statics.deleteExpiredUsers = async function () {
    const result = await this.deleteMany({ isMember: false, deletionDate: { $lte: new Date() } });
    console.log(`Deleted ${result.deletedCount} expired non-member users.`);
};

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
