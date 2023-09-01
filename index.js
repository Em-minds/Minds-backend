import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/mongoose.js";
import config from "./config/config.js";
import router from "./routers/index.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));

app.use("/api", router.users);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "./public")));

const startServer = async () => {
    try {
        connectDB();
        app.listen(config.PORT, () => {
            console.log(`Server started on ${config.PORT}`);
        });
    } catch (err) {
        console.error("Server start Failed");
        console.error(err);
    }
};

startServer();
