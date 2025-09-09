import type { Task } from "../models/Task";
import axios from "axios";
const API_URL = "http://localhost:8000/tasks";

export const TaskService = {
    async getAll():Promise<Task[]>{
        const {data} = await axios.get(API_URL);
        return data;
    },
    
    async create(task:Partial<Task>):Promise<Task>{
        const {data} = await axios.post(API_URL,task);
        return data;
    },

    async update(id:string, task:Partial<Task>):Promise<Task>{
        const {data} = await axios.put(`${API_URL}/${id}`,task);
        return data
    },

    async remove(id:string):Promise<void>{
        await axios.delete(`${API_URL}/${id}`);
    }

}
