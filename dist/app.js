"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Connect to MongoDB
(0, db_1.default)();
// Import routes
const authRoute_1 = __importDefault(require("./routes/authRoute"));
app.use("/api/auth", authRoute_1.default);
exports.default = app;
