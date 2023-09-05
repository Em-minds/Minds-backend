import mongoose from "mongoose";
import config from "../config/config.mjs";
import Emails from "./mail.model.mjs";

mongoose.Promise = global.Promise

const db = {
    mongoose,
    url: config.MONGODB_URL,
    email: Emails,
}

export default db