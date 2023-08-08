import express  from "express";
import dotenv from 'dotenv'
import ejs from "ejs"
import bodyParser from "body-parser";
import conn from './db.js'
import pageRoute from './routes/pageRoute.js'
import photoRoute from './routes/photoRoute.js';

dotenv.config();

//connection to the DB
conn();

const app = express();
app.set("view engine","ejs");

//static files middleware
app.use(express.static('public'));
app.use(express.json());

// route
app.use('/', pageRoute);
app.use('/photos', photoRoute);

 
app.listen(3000,function(){
    console.log("Server aktivdir.")
})