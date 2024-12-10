"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

/// Main component rendering the table, and also responsible to configure the next button to control the next offset
export function PoliciesTable({
  policies,
  nextOffset,
  rowsPerPage,
  totalPosts,
}: {
  policies: any[];
  nextOffset: number;
  rowsPerPage: number;
  totalPosts: number;
}) {
  let router = useRouter();
  function prevPage() {
    router.back();
  }
  function nextPage() {
    router.push(`/policies/?currentOffset=${nextOffset}`);
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Policies</CardTitle>
          <CardDescription>View all your policies</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-right">Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {policies.map((policy) => (
                <TableRow key={policy.id}>
                  <TableCell className="font-medium">{policy.id}</TableCell>
                  <TableCell>{policy.name}</TableCell>
                  <TableCell>{policy.price}</TableCell>
                  <TableCell className="text-right">{policy.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <form className="flex items-center w-full justify-between">
            <div className="text-xs text-muted-foreground">
              Showing{" "}
              <strong>
                {Math.min(nextOffset - rowsPerPage, totalPosts) + 1}-
                {Math.min(nextOffset, totalPosts)}
              </strong>{" "}
              of <strong>{totalPosts}</strong> posts
            </div>
            <div className="flex">
              <Button
                formAction={prevPage}
                variant="ghost"
                size="sm"
                type="submit"
                disabled={nextOffset === rowsPerPage}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Prev
              </Button>
              <Button
                formAction={nextPage}
                variant="ghost"
                size="sm"
                type="submit"
                disabled={nextOffset >= totalPosts}
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </CardFooter>
      </Card>
    </>
  );
}
