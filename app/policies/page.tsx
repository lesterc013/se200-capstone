import AddButton from "@/components/add-button";
import { db } from "@/db";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function Page() {
  const insurancePolicies = await db.insurancePolicy.findMany();

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="my-4 mx-4">
          <AddButton textWithin="Add Policy" path="/policies/add" />
        </div>
        <div className="my-4 mx-4">
          <h1 className="text-3xl font-bold underline">Hello policies!</h1>
        </div>
        <div className="my-4 mx-4">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-right">Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {insurancePolicies.map((insurancePolicy) => (
                <TableRow key={insurancePolicy.id}>
                  <TableCell className="font-medium">
                    {insurancePolicy.id}
                  </TableCell>
                  <TableCell>{insurancePolicy.name}</TableCell>
                  <TableCell>{insurancePolicy.price}</TableCell>
                  <TableCell className="text-right">
                    {insurancePolicy.type}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
          </Table>
        </div>
      </div>
    </>
  );
}
