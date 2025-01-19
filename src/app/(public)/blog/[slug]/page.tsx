import {getBlogBySlug, getRelatedBlogsByCategory} from "@/app/api/blogs/controller";
// import BlogCard01 from "@/components/shared/card/BlogCard01";
import React from "react";

const page = async (props: {
  params: Promise<{slug: string}>;
  searchParams: Promise<{page: string; color: string; size: string}>;
}) => {
  // const searchParams = await props.searchParams;

  // const { page, color, size } = searchParams

  const params = await props.params;

  const {slug} = params;
  const blog = await getBlogBySlug(slug);

  const relatedBlogs = await getRelatedBlogsByCategory({
    category: blog.category,
    blogId: blog._id,
    page: Number(page || "1"),
  });
  console.log(relatedBlogs);
  return (
    <div>
      <h2>{blog.slug}</h2>
      <p>{blog.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-[50px]">
        {/* <BlogCard01 items={relatedBlogs.data}/> */}
      </div>
    </div>
  );
};

export default page;
