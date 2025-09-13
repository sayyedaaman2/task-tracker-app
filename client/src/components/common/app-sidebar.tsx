import { Home, Inbox,  PlusCircle } from "lucide-react"
import { Link } from "react-router"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "../ui/button"
import { useDialog } from "@/contexts/DialogContext"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Task",
    url: "/tasks",
    icon: Inbox,
  }
]

export function AppSidebar() {
  const { openTaskForm } = useDialog();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Task Tracker</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem key="add-task">
                <Button
                  variant="secondary"
                  className="flex items-center w-full px-3 py-2 mt-2 hover:bg-slate-200"
                  onClick={() => openTaskForm()}
                >
                  <PlusCircle className="mr-2" />
                  Add Task
                </Button>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}