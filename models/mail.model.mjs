import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        email: String,   
    },
    { timestamps: true }
);

schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const Emails = mongoose.model("emails", schema);

export default Emails;