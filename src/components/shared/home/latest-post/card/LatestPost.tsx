import BlogSinCard from "@/components/shared/card/BlogSinCard";
import React from "react";
const LatestPost = () => {
  return (
    <div>
      <h1 className="inline-block font-heading text-xl tracking-tight ">Recently Published</h1>
      <div className="w-full">
        <BlogSinCard/>
        <BlogSinCard/>
        <BlogSinCard/>
      </div>
    </div>
  );
};

export default LatestPost;
