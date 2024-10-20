"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = exports.validateSignup = void 0;
const { body } = require("express-validator");
// Using esModuleInterop import
// Validation middleware for signup
exports.validateSignup = [
    body("email").isEmail().withMessage("Email is invalid"),
    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),
    body("username").notEmpty().withMessage("Username is required"),
    body("age").isNumeric().withMessage("Age must be a number"),
];
// Validation middleware for login
exports.validateLogin = [
    body("email").isEmail().withMessage("Email is invalid"),
    body("password").notEmpty().withMessage("Password is required"),
];
