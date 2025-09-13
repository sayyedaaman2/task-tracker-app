import { columns } from '@/components/table/column'
import { DataTable } from '@/components/table/data-table'
import type { Task } from '@/models/Task'


interface TaskTableProps {
    data: Task[]
}
export default function TaskTable({ data }: TaskTableProps) {

    return (

        <DataTable columns={columns} data={data} />

    )
}
