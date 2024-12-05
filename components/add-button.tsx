import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AddButton({ textWithin, path }) {
  return (
    <>
      <Button>
        <Link href={path}>{textWithin}</Link>
      </Button>
    </>
  );
}
