"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.resetPassword = exports.createResetSession = exports.verifyOTP = exports.generateOTP = exports.register = exports.login = void 0;
var user_model_1 = require("../models/user.model");
var bcrypt_1 = require("bcrypt");
var generateToken_1 = require("../helpers/generateToken");
var otp_generator_1 = require("otp-generator");
var emailer_1 = require("../config/emailer");
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, match, log, token, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, user_model_1["default"].findOne({ email: email })];
            case 1:
                user = _b.sent();
                if (!user) {
                    return [2 /*return*/, res
                            .status(404)
                            .send({ error: "".concat(email, " no es un usuario registrado") })];
                }
                return [4 /*yield*/, bcrypt_1["default"].compare(password, user.password)];
            case 2:
                match = _b.sent();
                if (!match) {
                    return [2 /*return*/, res.status(404).send({ error: "La contraseña es incorrecta" })];
                }
                log = console.log;
                token = (0, generateToken_1["default"])(user.id);
                res.status(201).json({
                    msg: "Usuario logeado con exito",
                    email: email,
                    token: token
                });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                res.status(500).send(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, email, password, profile, _b, existUser, existEmail, _c, _d, _e, salt, hash, user, error_2;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _f.trys.push([0, 5, , 6]);
                _a = req.body, username = _a.username, email = _a.email, password = _a.password, profile = _a.profile;
                _d = (_c = Promise).all;
                return [4 /*yield*/, user_model_1["default"].findOne({ username: username })];
            case 1:
                _e = [
                    _f.sent()
                ];
                return [4 /*yield*/, user_model_1["default"].findOne({ email: email })];
            case 2: return [4 /*yield*/, _d.apply(_c, [_e.concat([
                        _f.sent()
                    ])])];
            case 3:
                _b = _f.sent(), existUser = _b[0], existEmail = _b[1];
                if (existUser) {
                    return [2 /*return*/, res.status(401).send({ error: "Este usuario ya existe" })];
                }
                if (existEmail) {
                    return [2 /*return*/, res.status(401).send({ error: "Este email ya esta en uso" })];
                }
                salt = bcrypt_1["default"].genSaltSync(10);
                hash = bcrypt_1["default"].hashSync(password, salt);
                user = new user_model_1["default"]({
                    username: username,
                    email: email,
                    password: hash,
                    profile: profile
                });
                return [4 /*yield*/, user.save()];
            case 4:
                _f.sent();
                res.status(201).json({
                    msg: "Usuario registrado con exito",
                    user: user
                });
                return [3 /*break*/, 6];
            case 5:
                error_2 = _f.sent();
                res.status(500).send(error_2);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.register = register;
var generateOTP = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, user, code, email, emailBody, mail;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.app.locals;
                return [4 /*yield*/, otp_generator_1["default"].generate(6, {
                        lowerCaseAlphabets: false,
                        upperCaseAlphabets: false,
                        specialChars: false
                    })];
            case 1:
                _a.OTP = _b.sent();
                username = req.query.username;
                return [4 /*yield*/, user_model_1["default"].findOne({ username: username })];
            case 2:
                user = _b.sent();
                code = req.app.locals.OTP;
                email = {
                    body: {
                        name: user.name,
                        intro: "Este es tu codigo de verificacion: ".concat(code),
                        outro: "¿Te quedaste con alguna pregunta?"
                    }
                };
                emailBody = emailer_1.mailGenerator.generate(email);
                mail = {
                    from: "abc@gmail.com",
                    to: user.email,
                    subject: "Codigo de verificaion",
                    html: emailBody
                };
                emailer_1.transporter
                    .sendMail(mail)
                    .then(function () {
                    return res.status(201).json({
                        msg: "Email enviado exitosamente",
                        code: code
                    });
                })["catch"](function () { return res.status(400).send({ error: "Algo malo paso" }); });
                return [2 /*return*/];
        }
    });
}); };
exports.generateOTP = generateOTP;
var verifyOTP = function (req, res) {
    var code = req.query.code;
    if (parseInt(req.app.locals.OTP) === parseInt(code)) {
        req.app.locals.OTP = null;
        req.app.locals.resetSession = true;
        return res.status(200).send({ msg: "Verificaion exitosa" });
    }
    return res.status(400).send({ error: "Codigo de verificacion invalido" });
};
exports.verifyOTP = verifyOTP;
var createResetSession = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (req.app.locals.resetSession) {
            req.app.locals.resetSession = false;
            return [2 /*return*/, res.status(201).send({ msg: "Acceso permitido" })];
        }
        return [2 /*return*/, res.status(440).send({ error: "La sesion expiro" })];
    });
}); };
exports.createResetSession = createResetSession;
var resetPassword = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, user, salt, hash, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                if (!req.app.locals.resetSession) {
                    return [2 /*return*/, res.status(440).send({ error: "La sesion expiro" })];
                }
                _a = req.body, username = _a.username, password = _a.password;
                return [4 /*yield*/, user_model_1["default"].findOne({ username: username })];
            case 1:
                user = _b.sent();
                if (!user) {
                    return [2 /*return*/, res.status(400).send({ error: "No se encontro el usuario" })];
                }
                salt = bcrypt_1["default"].genSaltSync(10);
                hash = bcrypt_1["default"].hashSync(password, salt);
                return [4 /*yield*/, user_model_1["default"].findOneAndUpdate({ username: username }, { password: hash })];
            case 2:
                _b.sent();
                req.app.locals.resetSession = false;
                return [2 /*return*/, res.status(201).send({ msg: "Contraseña actualizada con existo" })];
            case 3:
                error_3 = _b.sent();
                return [2 /*return*/, res.status(401).send({ error: error_3 })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.resetPassword = resetPassword;
