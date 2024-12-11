import AddButton from "@/components/add-button";
import { CustomersTable } from "@/components/customers-table";
import { getCustomersPaged } from "@/actions/getCustomersPaged";

/// Policies page that will extract the currentOffset from the searchParams which is pushed from the nextPage button
/// Then calls the getPoliciesPaged server action to retrieve the relevant data
/// Then renders PoliciesTable which will display the data + configure the prev and next buttons
export default async function Page({ searchParams }) {
  const currentOffset = searchParams.currentOffset ?? 0;
  const rowsPerPage = 5;

  const { customers, nextOffset, totalPosts } = await getCustomersPaged(
    Number(currentOffset),
    rowsPerPage
  );

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="my-4 mx-4">
          <AddButton textWithin="Add Policy Holder" path="/customers/add" />
        </div>
        <CustomersTable
          customers={customers}
          nextOffset={nextOffset}
          rowsPerPage={rowsPerPage}
          totalPosts={totalPosts}
        />
      </div>
    </>
  );
}
