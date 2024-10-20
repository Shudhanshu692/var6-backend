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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const authValidators_1 = require("../validators/authValidators");
const router = (0, express_1.Router)();
router.post("/signup", authValidators_1.validateSignup, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, authController_1.signup)(req, res); // Make sure signup doesn't return a response directly
        next(); // Move to the next middleware if needed
    }
    catch (err) {
        next(err); // Forward the error to the error handler middleware
    }
}));
router.post("/login", authValidators_1.validateLogin, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, authController_1.login)(req, res);
        next(); // Move to the next middleware
    }
    catch (err) {
        next(err); // Forward the error to the error handler middleware
    }
}));
router.post("/forget-password", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, authController_1.forgetPassword)(req, res);
        next();
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
