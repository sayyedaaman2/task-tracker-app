import { Request, Response } from "express";
import * as taskService from "../services/task.service";

// GET /api/tasks
export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.status(200).json(tasks);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch tasks", error: error.message });
  }
};

// GET /api/tasks/:id
export const getTaskById = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
        return res.status(400).json({ message: "Task ID is required" });
    }

    const task = await taskService.getTaskById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(task);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch task", error: error.message });
  }
};

// POST /api/tasks
export const createTask = async (req: Request, res: Response) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: "Failed to create task", error: error.message });
  }
};

// PUT /api/tasks/:id
export const updateTask = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
        return res.status(400).json({ message: "Task ID is required" });
    }
    const task = await taskService.updateTask(req.params.id, req.body);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(task);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: "Failed to update task", error: error.message });
  }
};

// DELETE /api/tasks/:id
export const deleteTask = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
        return res.status(400).json({ message: "Task ID is required" });
    }
    await taskService.deleteTask(req.params.id);
    res.status(204).send(); // No content
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete task", error: error.message });
  }
};
