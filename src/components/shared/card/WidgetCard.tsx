import Image from "next/image";

const WidgetCard = () => {
  return (
    <div>
      <div className="flex justify-between lg:justify-start gap-3 p-6 my-4 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] hover:shadow-[rgba(0,0,0,0.35)_0px_5px_15px] hover:-translate-y-3 transition-all duration-500">
        <div className="image">
          <Image
            width={90}
            height={80}
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            alt="Blog Post Image"
            className="w-[90px] h-[80px] object-cover rounded-lg"
          />
        </div>
        <div className="content">
          <h2 className="text-sm text-[#4a4a4a] font-bold">the best time to travel to cambodia</h2>
          <p className="text-[12px] font-normal text-[#687385] mt-[15px]">
            27jan <span className="w-1 h-1 rounded-full bg-slate-200"></span> 13k views
          </p>
        </div>
      </div>
    </div>
  );
};

export default WidgetCard;
