import mongoose from "mongoose";

const db = async () => {
  const DB_PASSWORD = "xWM6RabJfryAcz0q";
  const DB_USER = "victor3";
  
try{
  await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.iupdtnb.mongodb.net/?retryWrites=true&w=majority`
    ); 
    console.log("Sucess! Connect to Mongodb!");}

    
    catch(err){
        console.log(err);
    };
};

export default db;