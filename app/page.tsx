import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Frown } from "lucide-react";

import { auth } from "@/lib/auth";
import { LoginForm } from "@/components/auth/login-form";
import DashboardPage from "@/components/dashboard/dashboard";

export default async function Page() {
  const session = await auth();

  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
        {session ? (
          <>
            <div className="flex-col">
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Hello SE200 Assignment Part 1</CardTitle>
                  <CardDescription>
                    <div className="flex flex-row">
                      <Frown />
                      <Frown />
                      <Frown />
                      Apologies for the lack of error handling and really messy
                      code due to a lack of time. But still, thank you so much
                      for all the knowledge!
                      <Frown />
                      <Frown />
                      <Frown />
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
              <DashboardPage />
            </div>
          </>
        ) : (
          <>
            <LoginForm />
          </>
        )}
      </div>
    </>
  );
}
