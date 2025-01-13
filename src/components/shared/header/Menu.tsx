import {MenuIcon, UserIcon} from "lucide-react";
import Link from "next/link";
import data from "@/lib//data/data";
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
            <SheetTrigger>
              {" "}
              <MenuIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                 
                </SheetDescription>
              </SheetHeader>
              <div className="flex  flex-col gap-2   ">
                    {data.headerMenus.map((menu) => (
                      <Link href={menu.href} key={menu.href} className="header-button !p-2">
                        {menu.name}
                      </Link>
                    ))}
                  </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
