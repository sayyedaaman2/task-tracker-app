import { createContext, useContext, type ReactNode } from "react";
import { useTaskViewModel } from "@/viewmodels/TaskViewModel";
import type { Task } from "@/models/Task";

type TaskContextType = {
  tasks: Task[];
  loading: boolean;
  addTask: (task: Omit<Task, "_id">) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
};

const TaskContext = createContext<TaskContextType | null>(null);

export function TaskProvider({ children }: { children: ReactNode }) {
  const { tasks, loading, addTask, updateTask, deleteTask } = useTaskViewModel();

  return (
    <TaskContext.Provider value={{ tasks, loading, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error("useTasks must be used within TaskProvider");
  return ctx;
}
