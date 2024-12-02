import { Button } from "./ui/button";
import Link from "next/link";
import { LogOutIcon } from "lucide-react";

export default function LogoutButton() {
  return (
    <Button asChild size="icon" variant="outline">
      <Link href="/logout">
        <LogOutIcon />
      </Link>
    </Button>
  );
}
