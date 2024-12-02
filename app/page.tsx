import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AvatarButton from "@/components/avatar-button";

export default function Page() {
  return (
    <>
      {/* <div className="absolute top-4 right-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div> */}
      <AvatarButton />

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
