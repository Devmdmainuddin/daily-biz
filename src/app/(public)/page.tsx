import BlogCategory from "@/components/shared/home/blogCategory/BlogCategory";
import LatestPost from "@/components/shared/home/latest-post/card/LatestPost";
import {getBlogsByTag} from "../api/blogs/controller";
// import getProductsByTag from "../app/api/blogs/controller"

const Home = async () => {
  const todaysDeals = await getBlogsByTag({tag: "todays-deal"});
  console.log(todaysDeals);
  return (
    <div className="">
      <BlogCategory />
      <div className="flex flex-wrap">
        <main className="w-full lg:w-2/3">
          <LatestPost />
        </main>
        <aside className="w-full lg:w-1/3 px-3">
          <h2>sidebar</h2>
        </aside>
      </div>
    </div>
  );
};

export default Home;
