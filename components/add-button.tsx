import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AddButton({ textWithin, path }) {
  return (
    <>
      <div className="my-4 mx-4">
        <Button>
          <Link href={path}>{textWithin}</Link>
        </Button>
      </div>
    </>
  );
}
