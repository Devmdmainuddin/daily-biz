import {errorResponse, successResponse} from "../helpers";
import Blog, {IBlog} from "./model";
import {connectToDatabase} from "../../../lib/db/index";
import {PAGE_SIZE} from "@/lib/constants";

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

export async function getAllBlogs() {
  await connectToDatabase();
  const blogs = await Blog.find({isPublished: true});
  return blogs;
}
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
// GET ONE BlogPost BY SLUG
export async function getBlogBySlug(slug: string) {
  await connectToDatabase();
  const BlogPost = await Blog.findOne({slug, isPublished: true});
  if (!BlogPost) throw new Error("Blog not found");
  return JSON.parse(JSON.stringify(BlogPost)) as IBlog;
}

export async function getRelatedBlogsByCategory({
  category,
  productId,
  limit = PAGE_SIZE,
  page = 1,
}: {
  category: string;
  productId: string;
  limit?: number;
  page: number;
}) {
  await connectToDatabase();
  const skipAmount = (Number(page) - 1) * limit;
  const conditions = {
    isPublished: true,
    category,
    _id: {$ne: productId},
  };
  const products = await Blog.find(conditions)
    .sort({numSales: "desc"})
    .skip(skipAmount)
    .limit(limit);
  const productsCount = await Blog.countDocuments(conditions);
  return {
    data: JSON.parse(JSON.stringify(products)) as IBlog[],
    totalPages: Math.ceil(productsCount / limit),
  };
}
