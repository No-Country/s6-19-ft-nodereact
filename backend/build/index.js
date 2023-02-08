"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
require("dotenv/config.js");

var mongoDB_1 = require("../config/mongoDB");
(0, mongoDB_1["default"])();
var app = (0, express_1["default"])();
var PORT = process.env.PORT;
// Middlewares
app.use(express_1["default"].urlencoded({ extended: true }));
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
// Routes

app.listen(PORT, function () {
  console.log("Servidor escuchando al puerto ".concat(PORT));
});
