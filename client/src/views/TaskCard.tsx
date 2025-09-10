import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Task } from "../models/Task";
import { Button } from "@/components/ui/button";
import timeAndDateFormater from "@/utils/timeformat";
import { useState } from "react";
import  TaskForm  from "./TaskForm";

// simple status badge colors
const statusColors: Record<Task["status"], string> = {
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100",
  "in-progress":
    "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100",
  completed:
    "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100",
};

export function TaskCard({
  task,
  // onUpdate,
  onDelete,
  onToggleStatus,
  onSave
}: {
  task: Task;
  onUpdate?: (task: Task) => void;
  onDelete?: (id: string) => void;
  onToggleStatus?: (id: string) => void;
  onSave? : (task:Task)=> void;
}) {
    const [open, setOpen] = useState<boolean>(false);
  return (<>
    <Card className="w-md grid overflow-hidden">
      {/* Header */}
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{task.title}</CardTitle>
          <span
            className={`px-2 py-1 text-xs font-medium rounded-md ${statusColors[task.status]}`}
          >
            {task.status}
          </span>
        </div>
        {task.description && (
          <CardDescription>{task.description}</CardDescription>
        )}
      </CardHeader>

      {/* Content */}
      <CardContent className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
        {task.createdAt && (
          <p>
            Created:{" "}
            <time dateTime={String(task.createdAt)}>
              {timeAndDateFormater(task.createdAt)}
            </time>
          </p>
        )}
        {task.updatedAt && (
          <p>
            Updated:{" "}
            <time dateTime={String(task.updatedAt)}>
              {timeAndDateFormater(task.updatedAt)}
            </time>
          </p>
        )}
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex gap-2">
        <Button
          type="button"
        onClick={() => setOpen(true)}
          variant="default"
        >
          Update
        </Button>
        <Button
          type="button"
          onClick={() => task._id && onDelete?.(task._id)}
          variant="destructive"
        >
          Delete
        </Button>
        <Button
          type="button"
          onClick={() => task._id && onToggleStatus?.(task._id)}
          variant="outline"
        >
          {task.status === "completed" ? "Reopen" : "Mark Complete"}
        </Button>
      </CardFooter>
    </Card>
    <TaskForm
        open={open}
        task={task}
        onClose={() => setOpen(false)}
        onSave={(updated) => onSave?.(updated)}
      />
  </>

  );
}
