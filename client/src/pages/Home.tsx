import { TaskCard } from "@/views/TaskCard";
import { useTaskViewModel } from "@/viewmodels/TaskViewModel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Task } from "@/models/Task";
export default function HomePage() {
    const { tasks, loading, updateTask, addTask, deleteTask } = useTaskViewModel();
    function onToggleStatusHandler(id: string) {
        const task = tasks.find((t) => t._id === id);
        if (!task) return;

        // cycle through statuses
        let nextStatus: typeof task.status;
        if (task.status === "pending") nextStatus = "in-progress";
        else if (task.status === "in-progress") nextStatus = "completed";
        else nextStatus = "pending";


        updateTask(id, { status: nextStatus })
    }
    function onDeleteHandler(id: string) {
        const task = tasks.find((t) => t._id === id);
        if (!task) return;

        deleteTask(id)
    }
    function onSaveHanlder(task: Task) {

        const { _id, ...rest } = task;
        console.log(_id,rest);
        if (!_id) {
            addTask({ ...rest });
        } else {
            updateTask(_id, { ...rest });
        }
    }

    return (
        <div id="home" className="p-4 flex flex-col w-full">
            <div className="flex flex-wrap gap-4">
                {loading
                    ? <CardSkeletonList />
                    : tasks.map((task, index) => (

                        <TaskCard
                            key={index}
                            task={task}
                            onToggleStatus={onToggleStatusHandler}
                            onDelete={onDeleteHandler}
                            onSave={onSaveHanlder}
                        />
                    ))
                }
            </div>
        </div>

    )
}

function CardSkeletonList() {
    return (
        <>
            {Array.from({ length: 8 }).map((_, index) => (
                <Card key={index} className="w-full overflow-hidden">
                    {/* Header */}
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <Skeleton className="h-6 w-40 rounded-md" /> {/* title */}
                            <Skeleton className="h-5 w-16 rounded-md" /> {/* status badge */}
                        </div>
                        <CardDescription>
                            <Skeleton className="h-4 w-3/4 mt-2" /> {/* description */}
                        </CardDescription>
                    </CardHeader>

                    {/* Content */}
                    <CardContent className="space-y-2 text-sm">
                        <Skeleton className="h-4 w-48" /> {/* createdAt */}
                        <Skeleton className="h-4 w-40" /> {/* updatedAt */}
                    </CardContent>

                    {/* Footer */}
                    <CardFooter className="flex gap-2">
                        <Skeleton className="h-9 w-20 rounded-md" /> {/* Update */}
                        <Skeleton className="h-9 w-20 rounded-md" /> {/* Delete */}
                        <Skeleton className="h-9 w-28 rounded-md" /> {/* Mark Complete */}
                    </CardFooter>
                </Card>
            ))}
        </>
    );
}
