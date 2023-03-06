const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
//allow us to use static files like css and images
app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", (req, res) => {
  var height = Number(req.body.height); //converts string to number
  //code running on server, you won't see this code on the client
  var weight = Number(req.body.weight);
  var result = height + weight;
  res.send("the result of the calculation is " + result);
});

app.listen(3000, () => {
  console.log(`Example app is listening at ${port}`);
});
