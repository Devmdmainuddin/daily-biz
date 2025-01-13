import {APP_NAME} from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";


import Search from "./Search";
import Menu from "./Menu";
import { MainNav } from "./main-nav";

const Header = () => {
  return (
    <header className="bg-[#F3F4F6]  text-[#000000]">
      <div className="px-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center header-button font-extrabold text-2xl m-1 ">
              <Image src="/icons/logo.svg" width={40} height={40} alt={`${APP_NAME} logo`} />
              {APP_NAME}
            </Link>
          </div>
          <div className="hidden md:block flex-1 max-w-xl">
            <Search />
          </div>
          <Menu />
        </div>
        <div className="md:hidden block py-2">
          <Search />
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center mb-4">
        <MainNav/>
      </div>
    </header>
  );
};

export default Header;
