"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import LogoutButton from "./logout-button";

export default function AvatarButton() {
  return (
    <>
      <div className="absolute top-4 right-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
              <Avatar>
                <AvatarImage src="https://www.clipartmax.com/png/small/68-684645_pinhead-larry-by-kawaii-oekaki-chan-on-deviantart-patrick-star-pinhead-larry.png" />
                <AvatarFallback>OK</AvatarFallback>
              </Avatar>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-60"
            onOpenAutoFocus={(event) => event.preventDefault()}
          >
            <div className="grid gap-4">
              <div className="space-y-2 border-b border-gray-300 pb-2">
                <h4 className="font-medium leading-none">My Account</h4>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  {/* <Button variant="icon" size="icon">
                    <LogOut />
                  </Button> */}
                  <LogoutButton />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
