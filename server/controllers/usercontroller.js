import bcrypt from 'bcrypt';

import User from "../model/user.js"

export const userRegister = async (req, res) =>{
    try {

        const hashedPassword = await bcrypt.hash(req.body.password, 12)

        const user = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPassword
        };

        const newUser = new User(user);
        await newUser.save();
        return res.status(200).json({data: 'login successfull...'});
        
    } catch (e) {
        return res.status(500).json({msg: "internal server error"});
    }
}


export const userLogin = async (req, res) =>{
    return res.send("login successfull....")
}