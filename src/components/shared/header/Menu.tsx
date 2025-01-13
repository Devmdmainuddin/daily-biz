import {MenuIcon, UserIcon} from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-6 w-full items-center">
        <Link href="/cart" className="header-button flex gap-1 items-center">
          <UserIcon className="h-5 w-5" /> Hello,Sign in
        </Link>
        <div className="md:hidden block">
        <Sheet>
          <SheetTrigger> <MenuIcon /></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account and remove
                your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        </div>
      
      </nav>
    </div>
  );
};

export default Menu;
