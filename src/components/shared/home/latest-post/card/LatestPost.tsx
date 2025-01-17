import BlogSinCard from "@/components/shared/card/BlogSinCard";
import React from "react";
const LatestPost = () => {
  return (
    <div>
      <h1 className="HeadingTitle">Recently Published</h1>
      <div className="w-full my-[50px]">
        <BlogSinCard />
        <BlogSinCard />
        <BlogSinCard />
      </div>
    </div>
  );
};

export default LatestPost;
