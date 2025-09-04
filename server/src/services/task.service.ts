import Task,{ITask} from '../models/task.model'

export const getAllTasks = async (status?:string):Promise<ITask[]> =>{
    if(status){
        return Task.find({status});
    }
    return Task.find();
}

export const getTaskById = async(id:string):Promise<ITask | null > =>{
    return Task.findById(id)
}

export const createTask = async (taskData:Partial<ITask>):Promise<ITask> =>{
    const task = new Task(taskData);
    return task.save();
}

export const updateTask = async(id:string,updateData:Partial<ITask>):Promise<ITask | null> =>{
    return Task.findByIdAndUpdate(id,updateData,{new:true});
}

export const deleteTask = async (id: string): Promise<void | null> => {
  return await Task.findByIdAndDelete(id);
};

