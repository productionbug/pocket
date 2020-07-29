const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const port = process.env.PORT || 3000;

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.send("Welcome to pocket");
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
