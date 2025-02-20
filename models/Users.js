import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  collection: "Users"
});

export default mongoose.model("Users", userSchema);
