//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const nodemailer = require('nodemailer');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res) {
  res.render("index");
});

app.post("/", function(req, res) {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nisargprajapati202@gmail.com',
      pass: 'nisarg@2.com'
    }
  });

  var mailOptions = {
    from: 'nisargprajapati202@gmail.com',
    to: req.body.email,
    subject: 'cctv camera store',
    html: '<h1>Welcome to our cctv camera store. If you want to make a website so contact me <a href="tel:+917573860509">7573860509</a></h1>',
    text: "welcome to cctv camera store"
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("server is running on port 3000.");
});
