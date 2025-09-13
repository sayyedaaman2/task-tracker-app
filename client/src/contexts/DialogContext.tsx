// contexts/DialogContext.tsx
import { createContext, useContext, useState, type ReactNode } from "react";
import TaskForm from "@/views/TaskForm";
import DeleteTaskDialog from "@/views/DeleteTaskDialog";
import type { Task } from "@/models/Task";
import { useTasks } from "@/contexts/TaskContext";

type DialogContextType = {
  openTaskForm: (task?: Task) => void;
  openDeleteDialog: (task: Task) => void;
  closeDialog: () => void;
};

const DialogContext = createContext<DialogContextType | null>(null);

export function DialogProvider({ children }: { children: ReactNode }) {
  const { addTask, updateTask, deleteTask } = useTasks();

  const [editTask, setEditTask] = useState<Task | null>(null);
  const [deleteTaskTarget, setDeleteTaskTarget] = useState<Task | null>(null);

  // ---- Dialog control ----
  function openTaskForm(task?: Task) {
    if (task) {
      setEditTask(task); // edit mode
    } else {
      // ensure _id is undefined for new tasks
      setEditTask({ title: "", description: "", status: "pending", _id: undefined } as Task);
    }
  }

  function openDeleteDialog(task: Task) {
    setDeleteTaskTarget(task);
  }

  function closeDialog() {
    setEditTask(null);
    setDeleteTaskTarget(null);
  }

  // ---- Save handler (Add / Update) ----
  function onSaveHandler(task: Task) {
    const { _id, ...rest } = task;
    if (!_id) {
      addTask(rest); // new task
    } else {
      updateTask(_id, rest);
    }
    setEditTask(null);
  }

  return (
    <DialogContext.Provider value={{ openTaskForm, openDeleteDialog, closeDialog }}>
      {children}

      {editTask && (
        <TaskForm
          open={!!editTask}
          task={editTask}
          onClose={() => setEditTask(null)}
          onSave={onSaveHandler}
        />
      )}

      {deleteTaskTarget && (
        <DeleteTaskDialog
          open={!!deleteTaskTarget}
          onClose={() => setDeleteTaskTarget(null)}
          onConfirm={() => {
            if (deleteTaskTarget._id) deleteTask(deleteTaskTarget._id);
            setDeleteTaskTarget(null);
          }}
          taskTitle={deleteTaskTarget.title}
        />
      )}
    </DialogContext.Provider>
  );
}

export function useDialog() {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("useDialog must be used within DialogProvider");
  return ctx;
}
