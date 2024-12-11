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
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

/// Main component rendering the table, and also responsible to configure the next button to control the next offset
export function CustomersTable({
  customers,
  nextOffset,
  rowsPerPage,
  totalPosts,
}: {
  customers: any[];
  nextOffset: number;
  rowsPerPage: number;
  totalPosts: number;
}) {
  let router = useRouter();
  function prevPage() {
    router.back();
  }
  function nextPage() {
    router.push(`/customers/?currentOffset=${nextOffset}`);
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Policy Holders</CardTitle>
          <CardDescription>View all your policy holders</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Policies Held</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.id}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.firstName}</TableCell>
                  <TableCell>{customer.lastName}</TableCell>
                  <TableCell>
                    {customer.insurancePolicies.map((insurancePolicy) => (
                      <Badge
                        variant="outline"
                        className="mr-2"
                        key={insurancePolicy.id}
                      >
                        {insurancePolicy.name}
                      </Badge>
                    ))}
                  </TableCell>
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
              of <strong>{totalPosts}</strong> customers
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
