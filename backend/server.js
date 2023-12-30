import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const app = express();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to mongoDB database')
}).catch((err)=>{
    console.log(err)
})

const PORT = 3000||process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is running at PORT ${PORT}`)
})

