import { Request, Response, NextFunction } from "express";

// Custom error handler middleware
const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Handle Mongoose validation errors
  if (err.name === "ValidationError") {
    const errors: Record<string, string> = {};

    // Extract the error messages and field names
    Object.keys(err.errors).forEach((key) => {
      errors[key] = err.errors[key].message;
    });

    return res.status(400).json({
      message: "Validation Error",
      errors: errors,
    });
  }

  // Handle other errors
  res.status(500).json({
    message: "Server Error",
    error: err.message || "Something went wrong",
  });
};

export default errorHandler;
