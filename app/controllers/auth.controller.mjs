import bcrypt from "bcryptjs";
import db from "../models/index.mjs";
import Joi from "@hapi/joi";
import { signToken } from "../helpers/jwt.mjs";

const { user } = db;

const reqSchema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6)
});

export const signup = async (req, res) => {
    const { error } = reqSchema.validate(req.body);
    if (error) 
        return res.status(400).send(error.details[0].message);
    
    const { email, password } = req.body
    const existingUser = await user.findOne({
        "local.email": email
    })

    if (existingUser)
        return res.status(403).send({
            error : "Email is already in use"
        });
    
    const salt = await bcrypt.genSalt(10)
    const hashedPwd = await bcrypt.hash(password, salt)
    const newUser = new user({
        method: 'local',
        local: {
            email,
            password: hashedPwd,
        }
    })
    const verificationToken = Math.floor(1000 + Math.random() * 9000).toString()
    const expire = new Date()
    expire.setMinutes(expire.getMinutes() + 30)
    newUser.tokenExpiration = expire
    newUser.verificationToken = verificationToken
    

    await newUser.save()
    const token = signToken(newUser)
    res.status(200).json({ token })
}