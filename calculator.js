const express = require("express");
const bodyparser = require("body-parser"); 

const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
    var num1 = Number(req.body.num1)+Number(req.body.num2);
    res.send("the result is "+num1);
    
});
app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/bmiCalculator",function(req,res){
    var num1 = parseFloat(req.body.n1);
    var num2 = parseFloat(req.body.n2);
    var num3 = num1/(num2*num2);
    res.send("the result is "+num3);
    
});
app.listen(3000);