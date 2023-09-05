import dotenv from "dotenv";
dotenv.config();

// const MONGODB_URL = process.env.DEVELOP_MONGO_URL;
const MONGODB_URL = process.env.PRODUCT_MONGO_URL;
const PORT = process.env.PORT ;

export default {
    MONGODB_URL,
    PORT,
};
