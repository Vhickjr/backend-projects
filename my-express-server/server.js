const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/contact", (req, res) => {
  res.send("victormathias001@gmail.com");
});
app.get("/about", (req, res) => {
  res.send("I am a web developer");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
