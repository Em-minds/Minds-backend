import express from "express";
import mailController from "../controllers/mail.controller.mjs";

const router = express.Router();

router.post("/add", mailController.addEmail);

router.get("/get-emails", mailController.allEmails);

export default router;
