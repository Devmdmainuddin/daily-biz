import {getAllBlogs} from "@/app/api/blogs/controller";
import BlogSinCard from "@/components/shared/card/BlogSinCard";
import React from "react";
const LatestPost = async () => {
  const allBlogs = await getAllBlogs();
  return (
    <div>
      <h1 className="HeadingTitle">Recently Published</h1>
      <div className="w-full my-[50px]">
        {allBlogs.slice(0, 4).map((item) => (
          <BlogSinCard key={item._id} items={item} />
        ))}
      </div>
    </div>
  );
};

export default LatestPost;
