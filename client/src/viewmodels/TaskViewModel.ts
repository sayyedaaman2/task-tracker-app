import { useState,useEffect } from "react";
import type { Task } from "../models/Task";
import { TaskService } from "../services/TaskService";

export function useTaskViewModel(){
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading,setLoading] = useState<boolean>(true);


    useEffect(()=>{
        TaskService.getAll().then((data)=>{
            setTasks(data);
            setLoading(false);
        });
    },[]);

    async function addTask(task:Partial<Task>) {
        const newTask = await TaskService.create(task);
        setTasks((prev)=> [...prev,newTask]);
        
    }
    async function updateTask(id:string,task:Partial<Task>) {
        const updated = await TaskService.update(id,task);
        setTasks((prev)=> prev.map((t)=> (t.id == id ? updated : t)));        
    }
    async function deleteTask(id:string){
        await TaskService.remove(id);
        setTasks((prev)=> prev.filter((t)=> t.id !== id));
    }

    return {tasks,loading, addTask, updateTask, deleteTask}

}