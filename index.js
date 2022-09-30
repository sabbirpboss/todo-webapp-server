const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

const cors = require("cors");
// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Todo web app running well...");
});

app.listen(port, () => {
  console.log(`Todo web app listening at http://localhost:${port}`);
});
