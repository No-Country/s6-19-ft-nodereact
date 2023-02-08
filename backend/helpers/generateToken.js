"use strict";
exports.__esModule = true;
var jsonwebtoken_1 = require("jsonwebtoken");
var generateToken = function (id) {
    return jsonwebtoken_1["default"].sign({ id: id }, "".concat(process.env.JWT_KEY), {
        expiresIn: "24h"
    });
};
exports["default"] = generateToken;
