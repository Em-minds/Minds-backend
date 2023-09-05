import mongoose from "mongoose";
import config from "../config/config.mjs";
import Emails from "./mail.model.mjs";
import User from "./user.model.mjs";



mongoose.Promise = global.Promise

const db = {
    mongoose,
    url: config.MONGODB_URL,
    email: Emails,
    user: User,
}

export default db