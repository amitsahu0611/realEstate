import express from 'express'
import mongoose from 'mongoose'
import router from './routes.js'
import dotenv from 'dotenv'
dotenv.config()
const app = express();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to mongoDB database')
}).catch((err)=>{  
    console.log(err)
})

app.use(express.json())
app.use(router)


const PORT = 3000||process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is running at PORT ${PORT}`)
})

