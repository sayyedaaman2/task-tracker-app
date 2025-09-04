import { z } from "zod";
import { TaskStatus } from "../utils/constants";
import { zodObjectId } from "./common";

export const createTaskSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  status: z.enum([
    TaskStatus.PENDING,
    TaskStatus.IN_PROGRESS,
    TaskStatus.COMPLETED,
  ]).default(TaskStatus.PENDING),
});

export const updateTaskSchema = z.object({
  title : z.string().min(3,"Title must be at least 3 charcters").optional(),
  status : z.enum([
    TaskStatus.PENDING,
    TaskStatus.IN_PROGRESS,
    TaskStatus.COMPLETED,
  ])
})
export const taskIdSchema = z.object({
  id: zodObjectId(),
});
