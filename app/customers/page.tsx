import AddButton from "@/components/add-button";

export default function Page() {
  return (
    <>
      <AddButton textWithin="Add Policy Holder" path="/customers/add" />
      <h1 className="text-3xl font-bold underline">Hello customers!</h1>
    </>
  );
}
