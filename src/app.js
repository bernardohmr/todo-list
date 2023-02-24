const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const indexRoutes = require("./routes/index");
const todoRoutes = require("./routes/todo");

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/", indexRoutes);
app.use("/todos", todoRoutes);

module.exports = app;
