"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var user_controller_1 = require("../controllers/user.controller");
var verifyUser_1 = require("../middlewares/verifyUser");
var express_validator_1 = require("express-validator");
var handleErrors_1 = require("../middlewares/handleErrors");
var verify_token_1 = require("../middlewares/verify-token");
router.get("/:id", [
    verify_token_1["default"],
    (0, express_validator_1.check)("id", "No es un id valido de mongo").isMongoId(),
    (0, express_validator_1.check)("id", "Este id no existe").custom(verifyUser_1.userIdExist),
    handleErrors_1["default"],
], user_controller_1.getUser);
router.get("/", verify_token_1["default"], user_controller_1.getAllUsers);
router.put("/:id", verifyUser_1.userIdExist, user_controller_1.updateUser);
router["delete"]("/:id", verifyUser_1.userIdExist, user_controller_1.deleteUser);
exports["default"] = router;
