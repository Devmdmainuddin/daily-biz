import BlogCategory from "@/components/shared/home/blogCategory/BlogCategory";
import LatestPost from "@/components/shared/home/latest-post/card/LatestPost";
import {getAllBlogs, getBlogsByTag} from "../api/blogs/controller";
import Sidebar from "@/components/shared/sidebar";
import Sitebottom from "@/components/shared/home/sitebottom/sitebottom";
import BlogCard01 from "@/components/shared/card/BlogCard01";
import { Ads } from "@/components/shared/AdComponent";
// import getProductsByTag from "../app/api/blogs/controller"

const Home = async () => {
  const allBlogs = await getAllBlogs();
  console.log(allBlogs);
  const todaysDeals = await getBlogsByTag({tag: "todays-deal"});
  console.log(todaysDeals);
  return (
    <div className="">
      <BlogCategory />
      <div className="flex flex-wrap mt-[50px]">
        <main className="w-full lg:w-2/3">
          <LatestPost />
<Ads/>
          <h1 className="HeadingTitle">Recently Published</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-[50px]">
            {allBlogs?.map((items) => <BlogCard01 key={items._id} items={items} />)}
          </div>
          <Ads/>
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
