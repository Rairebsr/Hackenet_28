import express from 'express'
import connectDb from "./config/mongodb.js"
import stdrouter from './route/Student.js'
import cors from 'cors';
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 4000
connectDb()

app.use(express.json());
app.use(cors()) //to access backend from any id


app.use('/api/results',stdrouter)

app.get('/',(req,res)=>{
    res.send("API working")
})
app.listen(port,()=> console.log('server started on port:'+ port))