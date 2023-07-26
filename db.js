import mongoose from "mongoose";

export function dbConnection(){
    const params ={
        useNewUrlParser : true,
        useUnfiedTopology : true,
    }
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/stu_mentor")
    } catch (error) {
        
    }
}