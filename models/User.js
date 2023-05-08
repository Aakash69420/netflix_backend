const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    contact: { type: String, default: "" },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    // contact: {
    //   type: String,
    //   required: [true, "Please provide a valid contact number"],
    // },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
