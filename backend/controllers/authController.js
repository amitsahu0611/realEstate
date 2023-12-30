import User from "../models/User.js"
import bcryptjs from 'bcryptjs'
import { errorhandler } from "../utils/error.js"

function authController(){
    return {
        async signUp(req,res,next){
            const{username, email, password} = req.body
            const hashedPassword = bcryptjs.hashSync(password,10)

            const newUser = new User({username,email,password:hashedPassword})
            try {
                await newUser.save()
                res.status(200).json({message:"user created successfully"})
            } catch (error) {
                next(error)
            }
        }
    }
}

export default authController 