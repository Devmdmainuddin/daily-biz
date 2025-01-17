import Image from "next/image";

const CommentsCard = () => {
  return (
    <div>
      <div className="flex justify-between gap-3 p-6 my-4 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] hover:shadow-[rgba(0,0,0,0.35)_0px_5px_15px] hover:-translate-y-3 transition-all duration-500">

          <Image
            width={64}
            height={64}
            src="https://dummyimage.com/320x192/000/fff"
            alt="Blog Post Image"
            className="w-16 h-16 object-cover rounded-full"
          />
          <div className="">
            <div className="flex items-baseline gap-2">
            <h3 className="text-sm text-[#687385] font-bold">
            David
            </h3>
            <span className="w-1 h-1 rounded-full bg-slate-200"></span>
            <p className="text-[#687385] text-sm">
              16 Jan 2020
            </p>
            </div>
            <p className="text-[12px] font-normal text-[#687385] mt-2">A writer is someone for whom writing is more difficult then ...</p>
           
          </div>
        </div>
      </div>

  );
};

export default CommentsCard;
