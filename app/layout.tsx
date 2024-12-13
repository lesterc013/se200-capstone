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
      <body className="bg-gray-100">
        <SidebarProvider
          style={{
            "--sidebar-width": "3rem",
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
