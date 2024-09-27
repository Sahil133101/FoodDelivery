import express from 'express';

import cors from 'cors';
import { connectDB } from './Config/db.js';
//mongodb+srv://sahilnakulish143:<db_password>@cluster0.cpo2c.mongodb.net/?
//app config

const app = express();

const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

//db connection

connectDB();
// api endpoint

app.use("/api/food",foodRouter)


app.get("/",(req, res) => {
res.send("hello world!");

    })

    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    });