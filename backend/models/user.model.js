"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1["default"].Schema({
    profile: String,
    username: {
        type: String,
        required: [true, "El nombre de usuario es obligatorio"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "El email es obligatorio"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "La contraseña es obligatoria"],
        unique: true
    },
    isAdmin: {
        type: Boolean,
        "default": false
    },
    state: {
        type: Boolean,
        "default": true
    }
}, { timestamps: true });
var User = mongoose_1["default"].model("User", userSchema);
exports["default"] = User;
