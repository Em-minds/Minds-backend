import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    email: { type: String },
  },
  { timestamps: true }
);

const UserSchema = mongoose.model("User", User);

export default UserSchema;
