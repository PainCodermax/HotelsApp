import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import Route from "./routes/auth.js"
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config()
const connect = async()=>{
try {
  await mongoose.connect(process.env.MONGO);
  console.log("connected")
} catch (error) {
  throw(error)
}
};

app.use(cors())
app.use(cookieParser());
app.use(express.json())

//route
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)

app.use("/api/auth",authRoute)

//main
app.listen(3000,()=>{
    connect()
    console.log("haha")
})
