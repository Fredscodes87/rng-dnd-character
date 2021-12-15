//jhint esversion:6
const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/main.html");
    console.log(__dirname);
});
app.get("/main", function(req, res){

})
app.get("/characterSheet", function(req, res){
    res.sendFile(__dirname + "/characterSheet.html");
    console.log(__dirname);

})
app.listen(3000, function(){
    console.log("Server started on port 3000");
});
