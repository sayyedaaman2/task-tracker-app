import type { Task } from "../models/Task";

export function TaskCard({ task }: { task: Task }) {
  return (
    <div className="card"> 
      <div className="container border p-4 rounded-2xl shadow-md bg-white dark:bg-gray-800">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {task.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {task.description}
        </p>
      </div>

    </div>
  );
}
