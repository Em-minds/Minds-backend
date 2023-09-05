import db from "../models/index.mjs";

const User = db.user;

const signUp = async (req, res) => {
    try {
        // Validate request
        console.log(req.body, 'body')
        if (!req.body.email || !req.body.password ) {
            return res.status(400).json({ message: "Content can not be empty!" });
            ;
        }

        if (req.body.password.length < 6)
            return res.status(400).json({ message: "Password must be more than 6 characters!" });
    
        const existingUser = await Users.findOne({email: req.body.email})
        console.log(existingUser, 'eu')
    
        if (existingUser) {
            return res.json({message: 'User already exist!'})
        }

        const salt = await bcrypt.genSalt(10)
        const hashPwd =  await bcrypt.hash(req.body.password, salt)
        req.body.password = hashPwd
        const user = new Users(req.body)
        
        user
        .save(user)
        .then(data => {
        //res.send(data);
        })
        .catch(err => {
        return res.status(500).send({
            message:
            err.message || "Some error occurred while creating the user."
        });
        });

        const token = await jwt.sign({id: user.id}, process.env.SECRET_KEY,{expiresIn: process.env.EXPIRE})
    } catch (error) {
        console.log(error)
        return res.json({error: error})
    }
}
