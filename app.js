import express  from "express";
import dotenv from 'dotenv'
import ejs from "ejs"
import bodyParser from "body-parser";
import conn from './db.js'
import pageRoute from './routes/pageRoute.js'

dotenv.config();

//connection to the DB
conn();

const app = express();

app.use(express.static('public'));
app.set("view engine","ejs");

// route
app.use('/', pageRoute);

 
app.listen(3000,function(){
    console.log("Server aktivdir.")
})