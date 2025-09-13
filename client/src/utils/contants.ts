
export const taskStatuses = {
  PENDING: "pending",
  IN_PROGRESS: "in-progress",
  COMPLETED: "completed",
} as const;

export type TaskStatus = typeof taskStatuses[keyof typeof taskStatuses];

export const statusColors: Record<TaskStatus, string> = {
  "pending": "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100",
  "in-progress": "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100",
  "completed": "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100",
};
