import {errorResponse, successResponse} from "../helpers";
import Blog, {IBlog} from "./model";
import {connectToDatabase} from "../../../lib/db/index";

export const onBlogs = async () => {
  try {
    await connectToDatabase();
    const blog = await Blog.find({});
    return successResponse(blog);
  } catch (error) {
    console.log(error);
    return errorResponse("Internal server error", 500);
  }
};

export async function getAllCategories() {
  await connectToDatabase();
  const categories = await Blog.find({isPublished: true}).distinct("category");
  return categories;
}

export async function getBlogsByTag({tag, limit = 10}: {tag: string; limit?: number}) {
  await connectToDatabase();
  const products = await Blog.find({
    tags: {$in: [tag]},
    isPublished: true,
  })
    .sort({createdAt: "desc"})
    .limit(limit);
  return JSON.parse(JSON.stringify(products)) as IBlog[];
}
