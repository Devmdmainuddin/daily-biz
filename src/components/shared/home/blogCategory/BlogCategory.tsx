import React from "react";
import BlogCard from "../../card/BlogCard";
import {getBlogsByCategory} from "@/app/api/blogs/controller";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {IBlog} from "@/app/api/blogs/model";
import {NextResponse} from "next/server";
// import Autoplay from "embla-carousel-autoplay"

const BlogCategory = async () => {
  const Tech = await getBlogsByCategory({cat: "Tech"});
  const Programming = await getBlogsByCategory({cat: "Programming"});
  const Design = await getBlogsByCategory({cat: "Web Design"});
  const Development = await getBlogsByCategory({cat: "Web Development"});
  // const allcategories = await getAllCategories();
  // const renderBlogs = (blogs: IBlog[] | undefined) =>
  //   blogs && Array.isArray(blogs) ? (
  //     blogs.map((items, idx) => (
  //       <CarouselItem key={idx}>
  //         <BlogCard items={items} />
  //       </CarouselItem>
  //     ))
  //   ) : (
  //     <p>No blogs available</p>
  //   );
  const renderBlogs = (blogs: IBlog[] | undefined) => {
    if (!blogs || !Array.isArray(blogs)) {
      return <p>No blogs available</p>;
    }
    return blogs.map((items, idx) => (
      <CarouselItem key={idx}>
        <BlogCard items={items} />
      </CarouselItem>
    ));
  };

  const validateBlogs = (data: IBlog[] | NextResponse<{message: string}>): IBlog[] | undefined => {
    return Array.isArray(data) ? data : undefined;
  };
  return (
    <div>
      <div className="lg:flex items-stretch ">
        <div className="lg:w-1/2">
          <div className="sm:flex items-center justify-between xl:gap-x-2 gap-x-1 ">
            <div className="w-full sm:w-1/2 h-[384px]">
              <Carousel opts={{align: "start", loop: true}}>
                <CarouselContent>{renderBlogs(validateBlogs(Tech))}</CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div className="w-full sm:w-1/2 h-[384px]">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>{renderBlogs(validateBlogs(Programming))}</CarouselContent>
              </Carousel>
            </div>
          </div>

          <div className=" mt-2 h-[384px]">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>{renderBlogs(validateBlogs(Design))}</CarouselContent>
            </Carousel>
          </div>
        </div>
        <div className="lg:w-1/2 xl:ml-2 lg:ml-2 lg:mt-0  mt-2 lg:flex flex-col justify-between">
          <div className=" h-[384px]">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>{renderBlogs(validateBlogs(Development))}</CarouselContent>
            </Carousel>
          </div>
          <div className="sm:flex items-center justify-between xl:gap-x-2 gap-x-1  mt-2">
            <div className="w-full sm:w-1/2 h-[384px]">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>{renderBlogs(validateBlogs(Design))}</CarouselContent>
              </Carousel>
            </div>
            <div className="w-full sm:w-1/2 h-[384px] sm:mt-0 mt-2">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>{renderBlogs(validateBlogs(Programming))}</CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCategory;
