import TaskTable from '@/views/TaskTable'
import {useTasks} from '@/contexts/TaskContext'
export default function TaskPage(){
    const {tasks} = useTasks()
    return(
        <div id="tasks" className="p-4">
            <TaskTable data={tasks}/>
        </div>
    )
}