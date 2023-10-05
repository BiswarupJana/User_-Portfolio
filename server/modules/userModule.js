const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please tell us your name"],
    },
    dob: {
      type: Date,
      required: [true, "Please tell us your date of birth"],
    },
    addressLine1: {
      type: String,
      required: [true, "Please tell us your address"],
    },
    addressLine2: {
      type: String,
    },
    city: {
      type: String,
      required: [true, "Please tell us your city"],
    },
    state: {
      type: String,
      required: [true, "Please tell us your state"],
    },
    country: {
      type: String,
      required: [true, "Please tell us your country"],
    },
    skills: {
      type: String,
      required: [true, "Please tell us your skills"],
    },
    highestEducation: {
      type: String,
      required: [true, "Please tell us your highest education"],
    },
    currentLocation: {
      type: String,
    },
    email: {
      type: String,
      require: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "please provide a valid email"],
    },
    ph_number: {
      type: String,
      required: [true, "Please provide your phone number"],
      unique: true,
      // validate: [validator.isMobilePhone, "please provide a valid phone number"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const UserDetails = mongoose.model("UserDetails", userSchema);
module.exports = UserDetails;