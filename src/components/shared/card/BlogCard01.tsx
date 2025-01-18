import {IBlog} from "@/app/api/blogs/model";
import {Share2} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {formatPublicationDate} from "../../../lib/utils";
const BlogCard01 = ({items}: {items: IBlog}) => {
  // console.log(items);
  return (
    <div className="group">
      <div className="image relative overflow-hidden">
        <Image
          width={325}
          height={211}
          alt="author image"
          src={items.images[0]}
          className="h-full w-full group-hover:scale-125 object-cover transition-all duration-500"
        />
        <span className="absolute top-[20px] left-[20px] text-center text-[14px] font-bold leading-[1.2] tracking-[0em] text-white bg-[rgba(71,71,71,0.4)] px-[22px] py-[5px] rounded-full z-50">
          {items.category}
        </span>

        {/* Icons */}
        <span className="w-10 h-10 absolute bottom-[20px] right-[20px] group-hover:right-[110px] opacity-0 group-hover:opacity-100 text-center text-[14px] font-bold leading-[1.2] tracking-[0em] text-white bg-[rgba(65,152,124,0.89)] p-3 rounded-full z-50 transition-all duration-500 delay-100 flex justify-center items-center">
          <Share2 className="text-xl" />
        </span>
        <span className="w-10 h-10 absolute bottom-[20px] right-[20px] group-hover:right-[65px] opacity-0 group-hover:opacity-100 text-center text-[14px] font-bold leading-[1.2] tracking-[0em] text-white bg-[rgba(65,152,124,0.89)] p-3 rounded-full z-50 transition-all duration-500 delay-200 flex justify-center items-center">
          <Share2 className="text-xl" />
        </span>
        <span className="w-10 h-10 absolute bottom-[20px] right-[20px] group-hover:right-[20px] opacity-0 group-hover:opacity-100 text-center text-[14px] font-bold leading-[1.2] tracking-[0em] text-white bg-[rgba(65,152,124,0.89)] p-3 rounded-full z-50 transition-all duration-500 delay-300 flex justify-center items-center">
          <Share2 className="text-xl" />
        </span>
      </div>

      <div className="content my-4">
        <div className="flex items-center gap-3">
          <h4 className="text-[16px] font-bold text-[#191919] hover:text-[#78EB54] transition-all duration-500">
            {items.author}
          </h4>
          <span className="w-2 h-2 rounded-full bg-slate-400"></span>
          <span className="text-[16px] font-medium text-[#545454]">
            {formatPublicationDate(items.createdAt)}
          </span>
        </div>
        <Link href={`/blog/${items.slug}`}>
          <h2 className="text-[22px] font-bold text-[#191919] mt-4 hover:text-[#78EB54] transition-all duration-500">
            {items.title}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard01;
