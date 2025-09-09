import { useState, useEffect, useCallback } from "react";
import type { Task } from "../models/Task";
import { TaskService } from "../services/TaskService";
import useToast from "@/hooks/useToast";

export function useTaskViewModel() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { toast } = useToast()


    const fetchTasks = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await TaskService.getAll();
            setTasks(data);
        } catch (err) {
            const message =
                err instanceof Error ? err.message : "Failed to fetch tasks";
            setError(message);
            toast.error(`❌ ${message}`);
        } finally {
            setLoading(false);
        }
    }, [toast]); // ✅ only depends on toast


    useEffect(() => {
        fetchTasks()
    }, [fetchTasks]);



    async function addTask(task: Partial<Task>) {
        try {
            const newTask = await TaskService.create(task);
            setTasks((prev) => [...prev, newTask]);
            toast.success("✅ Task added successfully");
            return newTask;
        } catch (err) {
            const message =
                err instanceof Error ? err.message : "Failed to add task";
            setError(message);
            toast.error(`❌ ${message}`);
            throw err;
        }

    }
    async function updateTask(id: string, task: Partial<Task>) {
        try {
            const updated = await TaskService.update(id, task);
            setTasks((prev) =>
                prev.map((t) => (t._id === id ? { ...t, ...updated } : t))
            );
            toast.success("✅ Task updated successfully");
            return updated;
        } catch (err) {
            const message =
                err instanceof Error ? err.message : "Failed to update task";
            setError(message);
            toast.error(`❌ ${message}`);
            throw err;
        }
    }
    async function deleteTask(id: string) {
        try {
            await TaskService.remove(id);
            setTasks((prev) => prev.filter((t) => t._id !== id));
            toast.success("🗑️ Task deleted");
        } catch (err) {
            const message =
                err instanceof Error ? err.message : "Failed to delete task";
            setError(message);
            toast.error(`❌ ${message}`);
            throw err;
        }
    }

    return {
        tasks,
        loading,
        error,
        fetchTasks,
        addTask,
        updateTask,
        deleteTask,
    }

}