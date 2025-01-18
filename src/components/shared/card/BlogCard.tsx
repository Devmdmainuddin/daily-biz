import {IBlog} from "@/app/api/blogs/model";
import Image from "next/image";
// import Link from "next/link";

const BlogCard = ({items}: {items: IBlog}) => {
  // const { title, images, author, createdAt } = items;
 
  return (
    <div className="relative rounded h-[364px]">
      <div className="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-transparent via-transparent to-black/70 "></div>
      <Image
        fill
        alt="blog image"
        src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80"
        className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
      />
      <div className="p-4 absolute bottom-0 left-0 z-20">
        <span className="px-4 py-1 text-sm bg-[#3abf7f] text-gray-200 inline-flex items-center justify-center mb-2">
          {items.category}
        </span>

        <h2 className="text-xl font-medium text-gray-100 leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h2>
        <div className="flex mt-3">
          <Image
            width={40}
            height={40}
            alt="auther image"
            src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80"
            className="w-10 h-10 rounded-full mr-2 object-cover bg-slate-600"
          />
          <div>
            <p className="font-semibold text-gray-200 text-sm"> Chrishell Staus </p>
            <p className="font-semibold text-gray-400 text-xs"> 15 Aug </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
