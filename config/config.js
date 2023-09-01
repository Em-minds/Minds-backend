import dotenv from "dotenv";
dotenv.config();

// const MONGODB_URL = process.env.DEVELOP_MONGO_URL;
const MONGODB_URL = process.env.PRODUCT_MONGO_URL || "mongodb+srv://Minds:TX4foBBxcNM9skVY@cluster0.wbdbqda.mongodb.net/empathicmind";
const PORT = "3300";

export default {
    MONGODB_URL,
    PORT,
};
