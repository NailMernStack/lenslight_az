import express  from "express";


const app = express();

app.get("/",function(req,res){
    res.send("Index sayfasi")
})



app.listen(3000,function(){
    console.log("Server aktivdir.")
})