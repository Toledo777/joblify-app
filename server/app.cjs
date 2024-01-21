const express = require("express");
const cors = require("cors")
const app = express();
const router = require("./routes.cjs");


app.use(cors());
app.use("/api", router);

module.exports = app;
