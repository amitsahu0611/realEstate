import User from "../models/User.js"
import bcryptjs from 'bcryptjs'

function authController(){
    return {
        async signUp(req,res){
            const{username, email, password} = req.body
            const hashedPassword = bcryptjs.hashSync(password,10)

            const newUser = new User({username,email,password:hashedPassword})
            await newUser.save()
            res.status(200).json({message:"user created successfully"})
        }
    }
}

export default authController 