import BlogCategory from "@/components/shared/home/blogCategory/BlogCategory";
import LatestPost from "@/components/shared/home/latest-post/card/LatestPost";
import {getBlogsByTag} from "../api/blogs/controller";
import Sidebar from "@/components/shared/sidebar";
import Sitebottom from "@/components/shared/home/sitebottom/sitebottom";
// import getProductsByTag from "../app/api/blogs/controller"

const Home = async () => {
  const todaysDeals = await getBlogsByTag({tag: "todays-deal"});
  console.log(todaysDeals);
  return (
    <div className="">
      <BlogCategory />
      <div className="flex flex-wrap mt-[50px]">
        <main className="w-full lg:w-2/3">
          <LatestPost />
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
