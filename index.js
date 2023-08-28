import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./db.js";
import { mentorRouter } from "./Routes/mentors.js";
import { studentRouter } from "./Routes/students.js";

dbConnection();

const app = express();
// Middlewares
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT;

// Routes

app.use("/mentor", mentorRouter);
app.use("/student", studentRouter);

// Check the End Point
app.get("/", (req, res) => {
  res.send("I am connected sucessfully");
});

app.listen(PORT, () =>
  console.log(`Server is connected in localhost : ${PORT}`)
);
