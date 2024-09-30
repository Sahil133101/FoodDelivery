import mongoose from "mongoose";

export const connectDB =  async  () => {
    await mongoose.connect('mongodb+srv://sahilnakulish143:UjkZyFEv5zYZWZVR@cluster0.cpo2c.mongodb.net/food-delivery?').then(()=> console.log("Connected to MongoDB"));
}