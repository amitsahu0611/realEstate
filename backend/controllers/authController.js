import User from "../models/User.js"
import bcryptjs from 'bcryptjs'
import { errorhandler } from "../utils/error.js"
import Jwt from "jsonwebtoken"

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
        },

        async signIn(req,res,next)
        {
            const {email, password} = req.body;
            try {
                const validUser = await User.findOne({email});
                console.log(validUser)
                if(!validUser)
                {
                    return next(errorhandler(404,'User not found!'))
                }

                // check password
                const validPassword = bcryptjs.compareSync(password, validUser.password) 
                if(!validPassword){
                    return next(errorhandler(401,'Incorrect Password'))
                }

                // if both is correct we do authentication and bascially it is the way of adding cookies to the browser

                const token = Jwt.sign({id:validUser._id},process.env.JWT_SECRET)

                // dont want to send password field\
                const{password:pass,...rest} = validUser._doc

                res.cookie('access_token',token,{
                    httpOnly:true,  //no 3rd party application can interfere our cookie
                    expires: new Date(Date.now()+24*60*60*1000)
                }).status(200).json(rest)

            } catch (error) {
                next(error)
            } 
        }
    }
}

export default authController 