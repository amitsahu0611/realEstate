import User from "../models/User.js"

function authController(){
    return {
        async signUp(req,res){
            const{username, email, password} = req.body

            const newUser = new User({username,email,password})
            await newUser.save()
            res.status(200).json({message:"user created successfully"})
        }
    }
}

export default authController 