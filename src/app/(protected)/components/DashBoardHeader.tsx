import {User, BarChart, Package, Mail, ChevronRight, Bell, DiamondPlus} from "lucide-react";
import Link from "next/link";
import React, {ReactNode} from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {MenuIcon, Search} from "lucide-react";
import Image from "next/image";

interface MenuItemProps {
  href: string;
  icon: ReactNode;
  label: string;
}
const MenuItem: React.FC<MenuItemProps> = ({href, icon, label}) => (
  <li>
    <Link
      href={href}
      className="text-gray-800 text-sm flex items-center cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2.5 transition-all duration-300 "
    >
      <span className="w-[18px] h-[18px] mr-4">{icon}</span>
      <span>{label}</span>
      <ChevronRight className="w-[18px] h-[18px] ml-auto" />
    </Link>
  </li>
);

const DashBoardHeader = () => {
  const user = {
    name: "John Doe",
    email: "johndoe23@gmail.com",
    profilePic: "https://readymadeui.com/profile.webp",
  };
  const menuItems = [
    {href: "/", icon: <User className="w-[20px] h-[20px] mr-3" />, label: "Dashboard"},
    {href: "/insight", icon: <BarChart className="w-[20px] h-[20px] mr-3" />, label: "Insight"},
    {href: "/people", icon: <Mail className="w-[20px] h-[20px] mr-3" />, label: "People & Terms"},
    {href: "/product", icon: <Package className="w-[20px] h-[20px] mr-3" />, label: "Product"},
  ];
  return (
    <header className="z-50 bg-[#f7f6f9] sticky top-0">
      <div className="flex flex-wrap items-center px-6 py-2 bg-white shadow-md min-h-[56px]  w-full relative tracking-wide">
        <div className="flex items-center flex-wrap gap-x-8 gap-y-4 z-50 w-full">
          <div className="lg:hidden   bg-white z-[50]">
            <Sheet>
              <SheetTrigger>
                {" "}
                <MenuIcon />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="bg-gray-200 text-[#282828] h-screen fixed top-0 left-0 min-w-[250px] py-6 px-4 font-[sans-serif] tracking-wide overflow-auto"
              >
                {/* <TheSidebar/> */}
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-4 cursor-pointer">
                      <Image
                        width={60}
                        height={40}
                        alt="Profile Picture"
                        src={user.profilePic}
                        className="w-10 h-10 rounded-full border-2 border-[#939292]"
                      />
                      <div>
                        <p className="text-sm text-[#525252]">{user.name}</p>
                        <p className="text-xs text-[#939292] mt-0.5">{user.email}</p>
                      </div>
                    </div>
                    <hr className="my-6 border-gray-400" />
                  </SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
                <ul className="space-y-3">
                  {menuItems.map((item, index) => (
                    <MenuItem key={index} href={item.href} icon={item.icon} label={item.label} />
                  ))}
                </ul>
                {/* <div className="flex  flex-col gap-2   ">
                {data.headerMenus.map((menu) => (
                  <Link href={menu.href} key={menu.href} className="header-button !p-2">
                    {menu.name}
                  </Link>
                ))}
              </div> */}
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex items-center gap-4 py-1 outline-none border-none">
            <Search className="w-6 cursor-pointer text-[#767474]" />

            <input
              type="text"
              placeholder="Search something..."
              className="w-full text-sm bg-transparent rounded outline-none"
            />
          </div>
          <div className="flex items-center gap-8 ml-auto">
            <div className="flex items-center space-x-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 cursor-pointer fill-[#333] hover:fill-[#077bff]"
                viewBox="0 0 511 511.999"
              >
                <path
                  d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 0 1-12.117 5.024h-22.72c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 0 0-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 0 1 256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0"
                  data-original="#000000"
                />
              </svg>
              <Bell className="text-[#555555]" />
              <DiamondPlus className="text-[#555555]" />
            </div>

            <div className="dropdown-menu relative flex shrink-0 group">
              <Image
                src="https://readymadeui.com/team-1.webp"
                width={36}
                height={36}
                alt="profile-pic"
                className=" rounded-full border-2 border-gray-300 cursor-pointer"
              />

              <div className="dropdown-content hidden group-hover:block shadow-md p-2 bg-white rounded-md absolute top-9 right-0 w-56">
                <div className="w-full">
                  <a
                    href="javascript:void(0)"
                    className="text-sm text-gray-800 cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-3 fill-current"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                        data-original="#000000"
                      ></path>
                    </svg>
                    Account
                  </a>
                  <hr className="my-2 -mx-2" />

                  <a
                    href="javascript:void(0)"
                    className="text-sm text-gray-800 cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-4 h-4 mr-3 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19.56 23.253H4.44a4.051 4.051 0 0 1-4.05-4.05v-9.115c0-1.317.648-2.56 1.728-3.315l7.56-5.292a4.062 4.062 0 0 1 4.644 0l7.56 5.292a4.056 4.056 0 0 1 1.728 3.315v9.115a4.051 4.051 0 0 1-4.05 4.05zM12 2.366a2.45 2.45 0 0 0-1.393.443l-7.56 5.292a2.433 2.433 0 0 0-1.037 1.987v9.115c0 1.34 1.09 2.43 2.43 2.43h15.12c1.34 0 2.43-1.09 2.43-2.43v-9.115c0-.788-.389-1.533-1.037-1.987l-7.56-5.292A2.438 2.438 0 0 0 12 2.377z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M16.32 23.253H7.68a.816.816 0 0 1-.81-.81v-5.4c0-2.83 2.3-5.13 5.13-5.13s5.13 2.3 5.13 5.13v5.4c0 .443-.367.81-.81.81zm-7.83-1.62h7.02v-4.59c0-1.933-1.577-3.51-3.51-3.51s-3.51 1.577-3.51 3.51z"
                        data-original="#000000"
                      ></path>
                    </svg>
                    Dashboard
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-sm text-gray-800 cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-3 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18 2c2.206 0 4 1.794 4 4v12c0 2.206-1.794 4-4 4H6c-2.206 0-4-1.794-4-4V6c0-2.206 1.794-4 4-4zm0-2H6a6 6 0 0 0-6 6v12a6 6 0 0 0 6 6h12a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6z"
                        data-original="#000000"
                      />
                      <path
                        d="M12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1z"
                        data-original="#000000"
                      />
                      <path
                        d="M6 12a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1z"
                        data-original="#000000"
                      />
                    </svg>
                    Posts
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-sm text-gray-800 cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-3 fill-current"
                      viewBox="0 0 510 510"
                    >
                      <g fillOpacity=".9">
                        <path
                          d="M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm0 459c-112.2 0-204-91.8-204-204S142.8 51 255 51s204 91.8 204 204-91.8 204-204 204z"
                          data-original="#000000"
                        />
                        <path
                          d="M267.75 127.5H229.5v153l132.6 81.6 20.4-33.15-114.75-68.85z"
                          data-original="#000000"
                        />
                      </g>
                    </svg>
                    Schedules
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-sm text-gray-800 cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-3 fill-current"
                      viewBox="0 0 6 6"
                    >
                      <path
                        d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                        data-original="#000000"
                      />
                    </svg>
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashBoardHeader;
