import "../globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import AvatarButton from "@/components/avatar-button";
import { auth, signOut } from "@/lib/auth";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en">
      <body className="bg-gray-100">
        <SidebarProvider
          style={{
            "--sidebar-width": "3rem",
          }}
        >
          {session ? (
            <>
              <AppSidebar />
              <SidebarTrigger />
              <AvatarButton />
            </>
          ) : null}
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
