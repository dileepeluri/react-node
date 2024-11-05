const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ users: ["usersOne", "usersTwo", "usersThree"] });
});

app.get("/products", (req, res) => {
  res.json({ products: ["productOne", "productTwo", "productThree"] });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
