import {IBlog} from "@/app/api/blogs/model";
import {formatPublicationDate} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const BlogSinCard = ({items}: {items: IBlog}) => {
  return (
    <div className="rounded w-full md:flex mb-10 p-6 my-4 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] hover:shadow-[rgba(0,0,0,0.35)_0px_5px_15px] hover:-translate-y-3 transition-all duration-500">
      {/* <div className="h-48 md:w-48 flex-none bg-[url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')] bg-cover text-center overflow-hidden opacity-75"></div> */}
      <div
        className="h-48 md:w-48 flex-none bg-cover bg-center text-center overflow-hidden opacity-75"
        style={{
          backgroundImage: `url(${items.images[0]})`,
        }}
      ></div>
      <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
        <div>
          <Link href={`/blog/${items.slug}`}>
            <div className="mt-3 md:mt-0 text-gray-700 font-bold text-xl mb-2">{items.title}</div>
          </Link>
          <p className="text-gray-700 text-sm">{items.description}</p>
        </div>
        <div className="flex mt-3">
          <Image
            width={40}
            height={40}
            alt="auther image"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            className="h-10 w-10 rounded-full mr-2 object-cover"
          />
          <div>
            <p className="font-semibold text-gray-700 text-sm capitalize">{items.author} </p>
            <p className="text-gray-600 text-xs">{formatPublicationDate(items.createdAt)} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSinCard;
