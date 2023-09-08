import mongoose from "mongoose";

const schema = new mongoose.Schema(
  method: {
        type: String,
        enum: ['local', 'google'],
        required: true
    },
    local: {
        email: {
            type: String,
            lowercase: true
        },
        password: {
            type: String
        }
    },
    google: {
        id: {
            type: String
        },
        email: {
            type: String,
            lowercase: true
        }
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
