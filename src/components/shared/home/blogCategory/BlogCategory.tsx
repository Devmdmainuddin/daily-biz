import React from "react";
import BlogCard from "../../card/BlogCard";

const BlogCategory = () => {
  return (
    <div>
      {/* <div className="block md:flex md:space-x-2 px-2 lg:p-0 w-full h-[384px]">
        <div className=" w-full md:w-2/3 ">
          <BlogCard01 />
        </div>
        <div className="w-full md:w-1/3 ">
          <BlogCard01 />
        </div>
      </div> */}
      <div className="lg:flex items-stretch ">
        <div className="lg:w-1/2">
          <div className="sm:flex items-center justify-between xl:gap-x-2 gap-x-1 ">
            <div className="w-full sm:w-1/2 h-[384px]">
              <BlogCard />
            </div>
            <div className="w-full sm:w-1/2 h-[384px]">
              <BlogCard />
            </div>
          </div>

          <div className=" mt-2 h-[384px]">
            <BlogCard />
          </div>
        </div>
        <div className="lg:w-1/2 xl:ml-2 lg:ml-2 lg:mt-0  mt-2 lg:flex flex-col justify-between">
          <div className=" h-[384px]">
            <BlogCard />
          </div>
          <div className="sm:flex items-center justify-between xl:gap-x-2 gap-x-1  mt-2">
            <div className="w-full sm:w-1/2 h-[384px]">
              <BlogCard />
            </div>
            <div className="w-full sm:w-1/2 h-[384px] sm:mt-0 mt-2">
              <BlogCard />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="block md:flex md:space-x-2 px-2 lg:p-0 w-full h-[384px]">
        <div className="w-full md:w-1/3 ">
          <BlogCard01 />
        </div>
        <div className="w-full md:w-2/3 ">
          <BlogCard01 />
        </div>
      </div> */}
    </div>
  );
};

export default BlogCategory;
