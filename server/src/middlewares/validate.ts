import { ZodError, ZodType } from "zod";
import { Request, Response, NextFunction } from "express";

type SchemaConfig = {
  body?: ZodType;
  params?: ZodType;
  query?: ZodType;
};

export const validate =
  (schemas: SchemaConfig) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      if (schemas.body) schemas.body.parse(req.body);
      if (schemas.params) schemas.params.parse(req.params);
      if (schemas.query) schemas.query.parse(req.query);

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.issues.map((issue) => ({
            path: issue.path,
            message: issue.message,
          })),
        });
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  };
