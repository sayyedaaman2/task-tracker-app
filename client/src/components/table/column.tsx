import type { ColumnDef } from '@tanstack/react-table'
import type { Task } from '@/models/Task'
import { Checkbox } from '@/components/ui/checkbox'
import timeAndDateFormater from '@/utils/timeformat'
import { Button } from '@/components/ui/button'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import { statusColors, type TaskStatus } from '@/utils/contants'
import { useDialog } from "@/contexts/DialogContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'




export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",

    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown />
        </Button>
      )
    },
  },
  {
    accessorKey: "description",
    header: "Description"
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as TaskStatus;

      return (
        <span
          className={`px-2 py-1 text-xs font-medium rounded-md ${statusColors[status] || "bg-gray-100 text-gray-800"}`}
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: 'Created',
    cell: ({ row }) => {
      const createdAt = row.getValue('createdAt') as string;
      const time = timeAndDateFormater(createdAt);
      return (
        <span>
          {time}
        </span>
      )
    }

  },
  {
    accessorKey: "updatedAt",
    header: 'last modified',
    cell: ({ row }) => {
      const updatedAt = row.getValue('updatedAt') as string;
      const time = timeAndDateFormater(updatedAt);
      return (
        <span>
          {time}
        </span>
      )
    }

  }, {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const task = row.original; // full task object
      const { openTaskForm, openDeleteDialog } = useDialog();
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => openTaskForm(task)}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => openDeleteDialog(task)} className="text-red-600" >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]