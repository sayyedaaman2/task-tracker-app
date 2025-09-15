// views/HomePage.tsx
import { TaskCard } from "@/views/TaskCard";
import { useTasks } from "@/contexts/TaskContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useDialog } from "@/contexts/DialogContext";

export default function HomePage() {
  const { tasks, loading, updateTask } = useTasks();
  const { openTaskForm, openDeleteDialog } = useDialog();

  function onToggleStatusHandler(id: string) {
    const task = tasks.find((t) => t._id === id);
    if (!task) return;

    let nextStatus: typeof task.status;
    if (task.status === "pending") nextStatus = "in-progress";
    else if (task.status === "in-progress") nextStatus = "completed";
    else nextStatus = "pending";

    updateTask(id, { status: nextStatus });
  }

  return (
    <div id="home" className="h-full overflow-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
      <div className="grid [grid-template-columns:repeat(auto-fill,minmax(350px,1fr))] auto-rows-[250px] gap-4 p-4 ">
        {loading ? (
          <CardSkeletonList />
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onEditClick={openTaskForm}
              onDeleteClick={openDeleteDialog}
              onToggleStatus={onToggleStatusHandler}
            />
          ))
        )}
      </div>
      
    </div>
  );
}

function CardSkeletonList() {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <Card key={index} className="w-full overflow-hidden">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-40 rounded-md" />
              <Skeleton className="h-5 w-16 rounded-md" />
            </div>
            <CardDescription>
              <Skeleton className="h-4 w-3/4 mt-2" />
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-40" />
          </CardContent>
          <CardFooter className="flex gap-2">
            <Skeleton className="h-9 w-20 rounded-md" />
            <Skeleton className="h-9 w-20 rounded-md" />
            <Skeleton className="h-9 w-28 rounded-md" />
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
