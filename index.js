const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/find", (req, res) => {
  let num = req.query.number;
  console.log(num);
  let n = parseInt(num);
  let r = n % 2 == 0 ? "even" : "odd";
  res.json({ r: r });
});

app.listen(8000, () => {
  console.log("ready to server @ 8000");
});
