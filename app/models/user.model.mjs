import mongoose from "mongoose";

const schema = new mongoose.Schema({
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
      googleId: {
          type: String
      },
      email: {
          type: String,
          lowercase: true
      }
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  verificationToken: {
    type: String,
  },
  tokenExpiration: {
    type: Date,
  },

}, { timestamps: true });

schema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});


const User = mongoose.model("User", schema);

export default User;
