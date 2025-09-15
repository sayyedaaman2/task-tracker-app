import type { Task } from "../models/Task";
import api from "../utils/apiClient";
export const TaskService = {
    
    async getAll():Promise<Task[]>{
        const {data} = await api.get('/tasks');
        return data;
    },
    async getById(id:string):Promise<Task>{
        const {data} = await api.get(`${'/tasks'}/${id}`);
        return data;
    },
    async create(task:Partial<Task>):Promise<Task>{
        const {data} = await api.post('/tasks',task);
        return data;
    },

    async update(id:string, task:Partial<Task>):Promise<Task>{
        const {data} = await api.put(`${'/tasks'}/${id}`,task);
        return data
    },

    async remove(id:string):Promise<void>{
        await api.delete(`${'/tasks'}/${id}`);
    }

}
