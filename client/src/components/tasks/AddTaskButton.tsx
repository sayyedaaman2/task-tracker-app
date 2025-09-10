import { PlusCircle } from "lucide-react";
import { Button } from "../ui/button";
import TaskForm from "@/views/TaskForm";
import { useState } from "react";
import type { Task } from "@/models/Task";


export default function AddTaskButton({
    onSave
}:{
    onSave? : (task:Task)=>void;
}) {
    const [open, setOpen] = useState<boolean>(false);


    return (<>

        <Button variant={"secondary"} className="bg-green-300 absolute right-12" onClick={()=> setOpen(true)}>
            Add Task <PlusCircle />
        </Button>
        <TaskForm
            open={open}
            onClose={() => setOpen(false)}
            onSave={(task)=>onSave?.(task)}
        />
    </>
    )
}