import express from "express";
import cors from 'cors';
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import bodyParser from "body-parser";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'

const app = express();
const port = 3000

//DB
connectDB()

//middleware
app.use(express.json())
app.use(cors());

//API endpoint      
app.use('/api/food', foodRouter);
app.use('/images',express.static('uploads'));
app.use("/api/user", userRouter)


app.get('/', (req,res)=>{
     res.send('API working')
});
app.listen(port, ()=>{
     console.log(`Server is running on http://localhost:${port}`)
})    
