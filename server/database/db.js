import mongoose from "mongoose";





const DBConnection =async() =>{
    try{
        await mongoose.connect(process.env.MOGO_URL);
         console.log(`Database is connected successfully`)
    }catch (error) {
        console.log("Error while connecting with database",error.message);
    }
}

export default DBConnection;