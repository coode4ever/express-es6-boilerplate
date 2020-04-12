import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Express es6 boilerplate</h1>");
});

app.listen(5000, () => console.log("Running server in 5000 port"));
