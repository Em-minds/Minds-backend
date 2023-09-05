import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    email: { type: String },
    password: {type: String }
  },
  { timestamps: true }
);

schema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});


const User = mongoose.model("User", schema);

export default User;
