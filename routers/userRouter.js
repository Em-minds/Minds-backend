import express from "express";
import User from "../models/User.model.js";

const router = express.Router();

router.route("/Emails").post(async (req, res) => {
  const newData = new User({ email: req.body.email });
  try {
    await newData.save();
    return res.json("email save success");
  } catch (error) {
    console.log(error);
    return res.status(400).json("email save failed");
  }
});

router.route("/getEmails").get(async (req, res) => {
  try {
    const users = await User.find();
    if (users) {
      res.json(users);
    } else res.json({});
  } catch (err) {
    res.status(400).json("failed")
  }
});

export default router;
