import Image from "next/image";

const BlogSinCard = () => {
  return (
    <div className="rounded w-full md:flex mb-10">
      <div className="h-48 md:w-48 flex-none bg-[url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')] bg-cover text-center overflow-hidden opacity-75"></div>
      <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
        <div>
          <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
            Suspendisse varius justo eu risus laoreet fermentum non aliquam dolor
          </div>
          <p className="text-gray-700 text-base">
            Mauris porttitor, velit at tempus vulputate, odio turpis facilisis dui, vitae eleifend
            odio ipsum at odio. Phasellus luctus scelerisque felis eget suscipit.
          </p>
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
            <p className="font-semibold text-gray-700 text-sm capitalize"> eduard franz </p>
            <p className="text-gray-600 text-xs"> 14 Aug </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSinCard;
