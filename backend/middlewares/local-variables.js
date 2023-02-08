"use strict";
exports.__esModule = true;
var localVariables = function (req, res, next) {
    req.app.locals = {
        OTP: null,
        resetSession: null
    };
    next();
};
exports["default"] = localVariables;
