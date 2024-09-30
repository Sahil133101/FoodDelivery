import express from 'express';
import { addFood } from '../Controllers/FoodController.js';
import multer from "multer";

const foodrouter = express.Router();    



// image storage engine

const storage= multer.diskStorage(
    {
        destination : "uploads",
        filename : (req, file, cb) => {
            return cb(null,`${Date.now()}$ {file.originalname}`)
        }
    }
)

const upload = multer({storage: storage});

foodrouter.post("/add",upload.single("image"),addFood)
export default foodrouter;
