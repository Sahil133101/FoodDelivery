import foodModel from "../models/FoodModle.js";

 import fs from "fs";


// add food item

const addFood = async (req, res) => {
let image_Filename = `${req.file.filename}`;

const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_Filename,
    category: req.body.category
})

try {
    await food.save();
    res.json({message: "Food item added successfully", success: true});
}
catch (err) {

    console.log(err);
    res.json({message: "Failed to add food item", success: false});
}
}
export {addFood}