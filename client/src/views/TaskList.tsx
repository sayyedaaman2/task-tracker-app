import { TaskCard } from "./TaskCard";
import { useTaskViewModel } from "../viewmodels/TaskViewModel";

export function TaskList() {
  const { tasks, loading } = useTaskViewModel();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="m-14 grid gap-12">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
