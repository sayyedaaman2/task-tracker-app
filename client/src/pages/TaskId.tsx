
import { useParams } from "react-router";

export default function TaskId() {
    const { id } = useParams();






        return (
            <div id="task_id" className="w-full mx-auto p-6">
            {id}
            </div>
        );
    }



