import db from "../models/index.mjs";

const Email = db.email;

const addEmail = async (req, res) => {
    const newData = new Email({ email: req.body.email });
    try {
      await newData.save();
      return res.json("email save success");
    } catch (error) {
      console.log(error);
      return res.status(400).json("email save failed");
    }
}

const allEmails = async (req, res) => {
    try {
      const emails = await Email.find();
      if (emails) {
        res.json(emails);
      } else res.json({});
    } catch (err) {
      console.log(err)
      res.status(400).json("oops..something went wrong")
    }
}

export default {
    addEmail,
    allEmails
}