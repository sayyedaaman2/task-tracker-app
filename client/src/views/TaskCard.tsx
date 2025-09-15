import { useNavigate } from "react-router";
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
import { statusColors } from '@/utils/contants'


export function TaskCard({
  task,
  onDeleteClick,
  onEditClick,
  onToggleStatus
}: {
  task: Task;
  onDeleteClick?: (task: Task) => void;
  onEditClick?: (task: Task) => void;
  onToggleStatus?: (id: string) => void;
}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (task._id) navigate(`/tasks/${task._id}`);
  };


  // helper to prevent card click when clicking footer buttons
  const stop = (e: React.MouseEvent) => {
    e.stopPropagation();
  };


  return (
    <Card className="w-full grid overflow-hidden hover:bg-slate-50  cursor-pointer"
    onClick={handleCardClick}>
      {/* Header */}

      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{task.title}</CardTitle>
          <span
            className={`px-2 py-1 text-xs text-nowrap font-medium rounded-md ${statusColors[task.status]}`}
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
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            stop(e);
            onEditClick?.(task);
          }}
          variant="default"
          className=" cursor-pointer hover:bg-slate-700"
        >
          Update
        </Button>
        <Button
          type="button"
           onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            stop(e);
            onDeleteClick?.(task);
            
          }}
          variant="destructive"
          className=" cursor-pointer hover:bg-red-800"
        >
          Delete
        </Button>
        <Button
          type="button"
           onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            stop(e);
            task._id && onToggleStatus?.(task._id);
          }}
          variant="outline"
          className=" cursor-pointer hover:bg-green-500 hover:text-white"
        >
          {task.status === "completed" ? "Reopen" : "Mark Complete"}
        </Button>
      </CardFooter>
    </Card>


  );
}
