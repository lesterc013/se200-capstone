import "../globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import AvatarButton from "@/components/avatar-button";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider
          style={{
            "--sidebar-width": "5rem",
            "--sidebar-width-mobile": "5rem",
          }}
        >
          <AppSidebar />
          <SidebarTrigger />
          <AvatarButton />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
