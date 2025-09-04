import {model,Schema,Document} from 'mongoose'
import { TaskStatus } from '../utils/constants';

export interface ITask extends Document{
    title : string;
    description? : string;
    status : TaskStatus
}


const taskSchema = new Schema<ITask>({
    title : {type : String, required: true, trim:true},
    description : {type : String},
    status : {
        type : String,
        enum : Object.values(TaskStatus),
        default : TaskStatus.PENDING
    }
    
},{
    timestamps : true,
    versionKey : false,
})

const Task = model<ITask>("Task",taskSchema);

export default Task;