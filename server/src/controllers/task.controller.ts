import { NextFunction, Request, Response } from "express";
import * as taskService from "../services/task.service";

// GET /api/tasks
export const getAllTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    if (error instanceof Error) { next(error) }
  }
};

// GET /api/tasks/:id
export const getTaskById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ message: "Task ID is required" });
    }

    const task = await taskService.getTaskById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(task);
  } catch (error) {
    if (error instanceof Error) { next(error) }
  }
};

// POST /api/tasks
export const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    if (error instanceof Error) { next(error) }
  }
};

// PUT /api/tasks/:id
export const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ message: "Task ID is required" });
    }
    const task = await taskService.updateTask(req.params.id, req.body);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(task);
  } catch (error) {
    if (error instanceof Error) { next(error) }
  }
};

// DELETE /api/tasks/:id
export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ message: "Task ID is required" });
    }
    const deletedTask = await taskService.deleteTask(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully", task: deletedTask });
  } catch (error) {
    if (error instanceof Error) { next(error) }
  }
};
