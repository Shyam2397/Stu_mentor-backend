import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("I am connected sucessfully")
})

app.listen(PORT,()=>console.log(`Server is connected in localhost : ${PORT}`))