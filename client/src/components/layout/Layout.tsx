import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/common/app-sidebar"
import DynamicBreadcrumb from "../common/DynamicBreadcrumb"
import RootContext from '@/contexts'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootContext>

      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
          <DynamicBreadcrumb />
          {children}
        </main>
      </SidebarProvider>
    </RootContext>
  )
}