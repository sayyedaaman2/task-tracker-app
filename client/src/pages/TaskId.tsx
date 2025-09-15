import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";
import {
    Card,
    CardHeader,
    CardFooter,
    CardContent,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useTaskViewModel } from "@/viewmodels/TaskViewModel";
import { statusColors } from "@/utils/contants";
import timeAndDateFormater from '@/utils/timeformat'
import { Button } from "@/components/ui/button";

export default function TaskId() {
    let navigate = useNavigate()
    const { id } = useParams();
    const { findById, selectedTask, loading } = useTaskViewModel();
    useEffect(() => {
        if (id) findById(id);
    }, [id, findById]);
    if (loading) {
        return (
            <div className="w-full mx-auto p-6 text-center">
                <p>Loading task...</p>
            </div>
        );
    }

    if (!selectedTask) {
        return (
            <div className="w-full mx-auto p-6 text-center">
                <p>Task not found</p>
            </div>
        );
    }

    return (
        <div id="task_id" className="w-full p-6 space-y-4">
            <Button className="cursor-pointer"  onClick={()=> navigate(-1)}>
                Go back
            </Button>
            <Card className="shadow-lg border border-gray-200 rounded-2xl">
                <CardHeader className="flex flex-col gap-2">
                    <Label className="text-sm text-gray-500">Task ID</Label>
                    <p className="text-lg font-mono text-gray-700 bg-gray-100 px-3 py-1 rounded-md w-fit">
                        {id}
                    </p>
                </CardHeader>

                <CardContent className="space-y-4">
                    <CardTitle className="text-2xl font-semibold text-gray-900">
                        {selectedTask.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                        {selectedTask.description}
                    </CardDescription>
                </CardContent>

                <CardFooter className="flex items-center justify-between border-t pt-4">
                    <span
                        className={`px-2 py-1 text-xs text-nowrap font-medium uppercase rounded-md ${statusColors[selectedTask.status]}`}
                    >
                        {selectedTask.status}
                    </span>
                    {
                        (selectedTask.createdAt && selectedTask.updatedAt) &&
                        (<>
                            <span className="text-xs text-gray-400">
                                Created At: {timeAndDateFormater(selectedTask.createdAt)}
                            </span>
                            <span className="text-xs text-gray-400">
                                Last updated: {timeAndDateFormater(selectedTask.updatedAt)}
                            </span>
                        </>
                        )
                    }
                </CardFooter>
            </Card>
        </div>

    );
}
