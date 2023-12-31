import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./app/config/mongoose.mjs";
import config from "./app/config/config.mjs";
import router from "./app/routers/index.mjs";

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));

app.use("/api/waitlist", router.waitlist);
app.use("/api/auth", router.auth);

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use(express.static(path.join(__dirname, "./public")));

const startServer = async () => {
    try {
        connectDB();
        app.get("/", (req, res) => {
            res.json({ message: "Welcome to minds backend application." });
        });
        app.listen(config.PORT, () => {
            console.log(`Server started on ${config.PORT}`);
        });
    } catch (err) {
        console.error("Server start Failed");
        console.error(err);
    }
};

startServer();


