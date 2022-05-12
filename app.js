//requirements
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const moongoose = require("mongoose");

moongoose.connect("mongodb+srv://admin-mukul:Test123@cluster0.tj2jy.mongodb.net/hackowasp",{ useNewUrlParser: true, useUnifiedTopology: true });

//Setting things up
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

const compulsaryData = [
    {
      id:'cq1',
      question: "Why do you want to join Enactus Thapar?",
      placeholder: "Why Enactus Thapar, hmm?",
    },
    {
      id:'cq2',
      question: "How has Social Entrepreneurship impacted your life?",
      placeholder: "Be honest here, the gods are watching",
    },
    {
      id:'cq3',
      question: "Any new project idea you want to work on with Enactus?",
      placeholder: "Describe it properly. We usually hate gibberish.",
    },
    {
      id:'cq4',
      question:
        "What do you think is the biggest social problem impacting us and why?",
      placeholder: "You better not copy-paste this one!",
    }];



const user = [];

const info = {
    fname: {
    type: String,
    required: true
    },
    roll: {
        type: String,
        required: true
    },
    email: {
    type: String,
    required: true
    },
    phone: {
        type: String,
        required: true
    },
    departments:[String]
}


app.get("/",(req,res)=>
{
    res.render("cform",{info:{title:"Mukul",questions:compulsaryData}});    
});


app.post("/",(req,res)=>
{
    const info = {
        fname: req.body.name,
        roll: req.body.roll,
        email: req.body.email,
        phone: req.body.phone
    }


});

app.listen(process.env.PORT||3000,(req,res)=>
{
    console.log("Server started at 3000");
});