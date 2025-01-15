import {ReactNode} from "react";
import Image from "next/image";
import Link from "next/link";
import {ChevronRight, CopyPlus, FolderKanban, Box, UserRoundCog, MonitorCog} from "lucide-react";

interface MenuItemProps {
  href: string;
  icon: ReactNode; 
  label: string;
}
const MenuItem: React.FC<MenuItemProps> = ({href, icon, label}) => (
  <li>
    <Link
      href={href}
      className="text-white text-sm flex items-center hover:bg-gray-700 rounded px-4 py-3 transition-all"
    >
      <span className="w-[18px] h-[18px] mr-4">{icon}</span>
      <span>{label}</span>
      <ChevronRight className="w-[18px] h-[18px] ml-auto" />
    </Link>
  </li>
);
const TheSidebar = () => {
  const user = {
    name: "John Doe",
    email: "johndoe23@gmail.com",
    profilePic: "https://readymadeui.com/profile.webp",
  };

  const menuItems = [
    {href: "/admin", icon: <MonitorCog className="w-[20px] h-[20px] mr-3" />, label: "Dashboard"},
    {
      href: "/admin/createBlog",
      icon: <CopyPlus className="w-[20px] h-[20px] mr-3" />,
      label: "Create Blog...",
    },
    {
      href: "/admin/blogs",
      icon: <FolderKanban className="w-[20px] h-[20px] mr-3" />,
      label: "Manage Blogs...",
    },
    {
      href: "/admin/reviews",
      icon: <Box className="w-[20px] h-[20px] mr-3" />,
      label: "Manage Reviews...",
    },
    {
      href: "/admin/users",
      icon: <UserRoundCog className="w-[20px] h-[20px] mr-3" />,
      label: "Manage Users...",
    },
  ];
  return (
    <nav className="bg-[#121e31] h-screen fixed top-0 left-0 min-w-[250px] py-6 px-4 font-[sans-serif] tracking-wide overflow-auto">
      <div className="flex items-center gap-4 cursor-pointer">
        <Image
          width={60}
          height={40}
          alt="Profile Picture"
          src={user.profilePic}
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <div>
          <p className="text-sm text-white">{user.name}</p>
          <p className="text-xs text-gray-300 mt-0.5">{user.email}</p>
        </div>
      </div>
      <hr className="my-6 border-gray-400" />
      <ul className="space-y-3">
        {menuItems.map((item, index) => (
          <MenuItem key={index} href={item.href} icon={item.icon} label={item.label} />
        ))}
      </ul>
    </nav>
  );
};

export default TheSidebar;
