import {errorResponse, successResponse} from "../helpers";
import Blog, {IBlog} from "./model";
import {connectToDatabase} from "../../../lib/db/index";
import {PAGE_SIZE} from "@/lib/constants";
import {revalidatePath} from "next/cache";
import {BlogPost, BlogPostSchema, BlogUpdateSchema} from "@/lib/validator/validator";
import {formatError} from "@/lib/utils";
import {z} from "zod";

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
  try {
    await connectToDatabase();
    const categories = await Blog.find({isPublished: true}).distinct("category");
    return successResponse(categories);
  } catch (error) {
    console.log(error);
    return errorResponse("Internal server error", 500);
  }
}

export async function getRelatedBlogsByCategory({
  category,
  blogId,
  limit = PAGE_SIZE,
  page = 1,
}: {
  category: string;
  blogId: string;
  limit?: number;
  page: number;
}) {
  try {
    await connectToDatabase();
    const skipAmount = (Number(page) - 1) * limit;
    const conditions = {
      isPublished: true,
      category,
      _id: {$ne: blogId},
    };
    const blogdata = await Blog.find(conditions)
      .sort({numSales: "desc"})
      .skip(skipAmount)
      .limit(limit);
    const blogCount = await Blog.countDocuments(conditions);
    return {
      data: JSON.parse(JSON.stringify(blogdata)) as IBlog[],
      totalPages: Math.ceil(blogCount / limit),
    };
  } catch (error) {
    console.log(error);
    return errorResponse("Internal server error", 500);
  }
}
// CREATE
export async function createBlog(data: BlogPost) {
  try {
    const blogdata = BlogPostSchema.parse(data);
    await connectToDatabase();
    await Blog.create(blogdata);
    revalidatePath("/admin/blogs");
    return {
      success: true,
      message: "Blog created successfully",
    };
  } catch (error) {
    return {success: false, message: formatError(error)};
  }
}
// UPDATE
export async function updateBlog(data: z.infer<typeof BlogUpdateSchema>) {
  try {
    const blogdata = BlogUpdateSchema.parse(data);
    await connectToDatabase();
    await Blog.findByIdAndUpdate(blogdata._id, blogdata);
    revalidatePath("/admin/blogs");
    return {
      success: true,
      message: "Blog updated successfully",
    };
  } catch (error) {
    return {success: false, message: formatError(error)};
  }
}
// DELETE
export async function deleteBlog(id: string) {
  try {
    await connectToDatabase();
    const res = await Blog.findByIdAndDelete(id);
    if (!res) throw new Error("Blog not found");
    revalidatePath("/admin/blog");
    return {
      success: true,
      message: "Blog deleted successfully",
    };
  } catch (error) {
    return {success: false, message: formatError(error)};
  }
}
// GET ONE BLOG BY ID
export async function getBlogById(blogId: string) {
  await connectToDatabase();
  const blog = await Blog.findById(blogId);
  return JSON.parse(JSON.stringify(blog)) as IBlog;
}
// GET ONE BlogPost BY SLUG
export async function getBlogBySlug(slug: string) {
  await connectToDatabase();
  const BlogPost = await Blog.findOne({slug, isPublished: true});
  if (!BlogPost) throw new Error("Blog not found");
  return JSON.parse(JSON.stringify(BlogPost)) as IBlog;
}
// GET ONE BlogPost BY TAG
export async function getBlogsByTag({tag, limit = 10}: {tag: string; limit?: number}) {
  await connectToDatabase();
  const blogs = await Blog.find({
    tags: {$in: [tag]},
    isPublished: true,
  })
    .sort({createdAt: "desc"})
    .limit(limit);
  return JSON.parse(JSON.stringify(blogs)) as IBlog[];
}
// GET ONE BlogPost BY CATEGORY
export async function getBlogsByCategory({cat, limit = 10}: {cat: string; limit?: number}) {
  await connectToDatabase();
  const blogdata = await Blog.find({
    category: {$in: [cat]},
    isPublished: true,
  })
    .sort({createdAt: "desc"})
    .limit(limit);
  return JSON.parse(JSON.stringify(blogdata)) as IBlog[];
}
