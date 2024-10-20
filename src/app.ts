import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db"; // Ensure this path is correct
import authRouter from "./routes/authRoute";
import errorHandler from "./middleware/errorHandler"; // Import the error handler

dotenv.config();

const app = express();
app.use(express.json());

connectDB(); // Connect to MongoDB

// Use the authRouter for authentication-related routes
app.use("/api/auth", authRouter);

// Error-handling middleware (this MUST come after routes)
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    errorHandler(err, req, res, next);
  }
);

// Export the app instance
export { app };
