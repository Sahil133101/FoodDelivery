import express from 'express';
import { addFood } from '../Controllers/FoodController';
import multer from "multer";

const foodrouter = express.Router();    

foodrouter.post("/add",addFood)

// image storage engine

const storage= multer.diskStorage(
    {
        destination : "uploads",
        filename : (req, file, cb) => {
            return cb(null,`${Date.now()}$ {file.originalname}`)
        }
    }
)

export default foodrouter;
