import dotenv from "dotenv"
import mongoose from "mongoose";
import { Db_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})