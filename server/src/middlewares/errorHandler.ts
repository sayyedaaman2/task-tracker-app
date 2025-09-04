import { Request, Response, NextFunction } from "express";
import ApiError from "../utils/ApiError";

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("Error caught:", err);

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  if (err instanceof Error) {
    return res.status(500).json({ message: err.message });
  }

  res.status(500).json({ message: "Unexpected error" });
}
