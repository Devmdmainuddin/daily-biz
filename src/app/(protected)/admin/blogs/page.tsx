import { getAllBlogs } from "@/app/api/blogs/controller";

import BlogTable from "./components/BlogTable";

const Blogs =async () => {
const blogs= await getAllBlogs()

  return (
    <div className="container mx-auto bg-gray-300 p-10 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 p-4">Blogs</h1>
      <div className="p-5 bg-white">
      <table className="table-auto w-full ">
      <thead className="">
              <tr className="text-xs text-gray-500 text-left bg-slate-300">
                <th className=" p-3 font-medium">Project ID</th>
                <th className="p-3 font-medium">image</th>
                <th className="p-3 font-medium">title</th>
                <th className="p-3 font-medium">Date</th>
                <th className="p-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {blogs.slice(0,4).map((item) => (
                <BlogTable key={item._id} item={item} />
              ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blogs;
