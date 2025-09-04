import { z } from "zod";

export const zodObjectId = () =>
  z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid MongoDB ObjectId");
