//requirments
import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

//self made
import Router from "./routes/route.js";
import Connection from "./database/db.js";

dotenv.config();


const app = express();
const PORT = 8000;

app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended: true}));


app.use('/', Router);
const URL = process.env.MONGODB_URI;
Connection(URL)

app.listen(PORT, ()=>{
    console.log(`server is running..... at http://127.0.0.1:${PORT}`);
})