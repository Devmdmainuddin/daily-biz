import BlogCategory from "@/components/shared/home/blogCategory/BlogCategory";
import LatestPost from "@/components/shared/home/latest-post/card/LatestPost";
import {getAllBlogs} from "../api/blogs/controller";
import Sidebar from "@/components/shared/sidebar";
import Sitebottom from "@/components/shared/home/sitebottom/sitebottom";
import BlogCard01 from "@/components/shared/card/BlogCard01";
import {IBlog} from "../api/blogs/model";
import {NextResponse} from "next/server";

// import getProductsByTag from "../app/api/blogs/controller"

const Home = async () => {
  const allBlogs = await getAllBlogs();

  // const todaysDeals = await getBlogsByTag({tag: "todays-deal"});
  const renderBlogs = (blogs: IBlog[] | undefined) => {
    if (!blogs || !Array.isArray(blogs)) {
      return <p>No blogs available</p>;
    }
    return blogs.map((items, idx: number) => <BlogCard01 key={idx} items={items} />);
  };

  const validateBlogs = (data: IBlog[] | NextResponse<{message: string}>): IBlog[] | undefined => {
    return Array.isArray(data) ? data : undefined;
  };
  return (
    <div className="">
      <BlogCategory />
      <div className="flex flex-wrap mt-[50px]">
        <main className="w-full lg:w-2/3">
          <LatestPost />
          <h1 className="HeadingTitle">Recently Published</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-[50px]">
            {renderBlogs(validateBlogs(allBlogs))}
          </div>
        </main>
        <aside className="w-full lg:w-1/3 px-3">
          <Sidebar />
        </aside>
      </div>
      <Sitebottom />
    </div>
  );
};

export default Home;
