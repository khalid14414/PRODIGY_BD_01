import express from "express"
import userRouter from "./router/user.js";
const app = express();

// Define middleware
app.use(express.json())

app.use('/task',userRouter)
const Port = process.env.PORT||5000
try {
    app.listen(Port,()=>{
        console.log(`App is running on post ${Port}`)
    })
} catch (error) {
    console.log(error)
}