import mongoose from "mongoose";
import config from "./config.js";

const connectDB = () => {
    mongoose.set('strictQuery', true);
    mongoose
        .connect(config.MONGODB_URL)
        .then(() => console.log("mongodb connected!"))
        .catch((err) => {
            console.error("failed to connect with mongo");
            console.error(err);
        });
};

export default connectDB;