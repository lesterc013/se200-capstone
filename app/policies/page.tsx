import AddButton from "@/components/add-button";
import { PoliciesTable } from "@/components/policies-table";
import { getPoliciesPaged } from "@/actions/getPoliciesPaged";

/// Policies page that will extract the currentOffset from the searchParams which is pushed from the nextPage button
/// Then calls the getPoliciesPaged server action to retrieve the relevant data
/// Then renders PoliciesTable which will display the data + configure the prev and next buttons
export default async function Page({ searchParams }) {
  const currentOffset = searchParams.currentOffset ?? 0;
  const rowsPerPage = 5;
  const { policies, nextOffset, totalPosts } = await getPoliciesPaged(
    Number(currentOffset),
    rowsPerPage
  );

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="my-4 mx-4">
          <AddButton textWithin="Add Policy" path="/policies/add" />
        </div>
        <PoliciesTable
          policies={policies}
          nextOffset={nextOffset}
          rowsPerPage={rowsPerPage}
          totalPosts={totalPosts}
        />
      </div>
    </>
  );
}
