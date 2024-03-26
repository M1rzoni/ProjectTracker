import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import process from "process";

dotenv.config({ path: './.env' });

const app = express();

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => console.log("Server started"));
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });
