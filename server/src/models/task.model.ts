import {model,Schema,Document} from 'mongoose'

export interface ITask extends Document{
    title : string;
    description? : string;
    completed : boolean;
}


const taskSchema = new Schema<ITask>({
    title : {type : String, required: true},
    description : {type : String},
    completed : { type : Boolean, default : false},
    
},{
    timestamps : true,
    versionKey : false,
})

const Task = model<ITask>("Task",taskSchema);

export default Task;