import mongoose from "mongoose";
import bcrypt from "bcryptjs";
// import UserVitals from "./userVitals.js";
const Schema = mongoose.Schema;

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
  password: {
    type: String,
    required: true
  },
  lastCKDResult: {
    type: String,
    enum: [
      "High Chances are present",
      "Low Chances are present",
      "Not yet tried the service"
    ],
    default: "Not yet tried the service"
  },
  lastDiabetesResult: {
    type: String,
    enum: [
      "High Chances are present",
      "Low Chances are present",
      "Not yet tried the service"
    ],
    default: "Not yet tried the service"
  },
}, {
  timestamps: true
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export default mongoose.model('User', userSchema);
