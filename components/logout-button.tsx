import { LogOutIcon } from "lucide-react";
import { logout } from "@/actions/logout";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button type="submit">
        <LogOutIcon size={12} />
      </button>
    </form>
  );
}
