import AddButton from "@/components/add-button";

export default function Page() {
  return (
    <>
      <AddButton textWithin="Add Policy" path="/policies/add" />
      <h1 className="text-3xl font-bold underline">Hello policies!</h1>
    </>
  );
}
