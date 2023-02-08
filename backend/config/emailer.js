"use strict";
exports.__esModule = true;
exports.mailGenerator = exports.transporter = void 0;
var nodemailer_1 = require("nodemailer");
var mailgen_1 = require("mailgen");
var transporter = nodemailer_1["default"].createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
        user: process.env.GMAIL_SECRET,
        pass: process.env.GOOGLE_SECRET
    }
});
exports.transporter = transporter;
var mailGenerator = new mailgen_1["default"]({
    theme: "default",
    product: {
        name: "mailgen",
        link: "https://mailgen.js/"
    }
});
exports.mailGenerator = mailGenerator;
transporter
    .verify()
    .then(function () { return console.log("connected"); })["catch"](function () { return console.log("algo malo paso en la conexion"); });
