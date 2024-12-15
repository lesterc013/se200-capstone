import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Authentication } from "@/components/authentication";

import Link from "next/link";
import { Frown } from "lucide-react";

import { auth, signOut } from "@/lib/auth";
import { LoginForm } from "@/components/auth/login-form";

export default async function Page() {
  const session = await auth();

  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
        {session ? (
          <Card>
            <CardHeader>
              <CardTitle>Hello SE200 Assignment Part 1</CardTitle>
              <CardDescription>
                <div className="flex flex-row">
                  <Frown />
                  <Frown />
                  <Frown />
                  Apologies for the lack of error handling and really messy code
                  cos time was not my friend haha
                  <Frown />
                  <Frown />
                  <Frown />
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter></CardFooter>
          </Card>
        ) : (
          <>
            <LoginForm />
          </>
        )}
      </div>
    </>
  );
}
