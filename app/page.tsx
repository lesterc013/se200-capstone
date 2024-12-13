import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Frown } from "lucide-react";

import { auth, signOut } from "@/lib/auth";

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
            <h1 className="text-4xl font-bold">Welcome to Heicoders!</h1>
            <div className="flex flex-row space-x-10">
              <Button className="mt-8">
                <Link href="/login" className="hover:underline">
                  Log In
                </Link>
              </Button>
              <Button className="mt-8">
                <Link href="/register" className="hover:underline">
                  Register
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
