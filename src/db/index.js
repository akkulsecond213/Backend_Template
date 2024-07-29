import { Db_NAME } from "../constants";
import mongoose from "mongoose";

const connectDB=async()=>{
    try{
       const connectionInstance= await mongoose.connect('');
       console.log(`\n MongoDb connected DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MONGODB connection error",error);
        process.exit(1);
    }
}

export default connectDB;