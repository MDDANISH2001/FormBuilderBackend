// responseModel.ts
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, require: true, unique: true },
    name: { type: String },
    password: { type: String, require: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
